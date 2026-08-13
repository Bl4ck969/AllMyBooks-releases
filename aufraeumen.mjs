// deploy/release-repo-workflows/aufraeumen.mjs
/**
 * Räumt einen ROHEN Fehlerbericht aus dem Ersatzweg auf.
 *
 * ⚠⚠ DIESER BOT LÖSCHT ISSUES. Er ist der einzige Baustein des Projekts mit
 * dieser Befugnis. Drei Sicherungen, und jede fängt etwas anderes:
 *
 *   1. BEIDE Erkennungsmerkmale (Label + Marke im Rumpf) — Erlaubnisliste.
 *   2. Ein Höchstalter — ein älteres Issue kann kein frisch gemeldeter
 *      Bericht sein, wohl aber ein fremdes, dem jemand das Label anhängte.
 *   3. Gelöscht wird ZULETZT, und nur wenn beide neuen Issues stehen.
 *
 * ⚠ Warum überhaupt löschen statt bearbeiten: GitHub bewahrt die
 * Bearbeitungs-Historie eines Issue-Rumpfs, und jeder mit Lesezugriff kann
 * sie über den „edited"-Vermerk abrufen. Ein herausbearbeiteter technischer
 * Teil wäre nicht entfernt, sondern einen Klick weit verschoben — eine
 * Massnahme, die aussieht, als wirke sie. Eine API zum Löschen einzelner
 * Revisionen gibt es nicht.
 *
 * ⚠ `deleteIssue` gibt es NUR in der GraphQL-API. GitHub verlangt dafür laut
 * Doku Admin-Zugriff auf das Repo — das ist eine Eigenschaft des KONTOS, nicht
 * ein Token-Scope; der Standard-`GITHUB_TOKEN` einer Action hat sie nicht.
 *
 * ⚠⚠ UNGEMESSEN: Ob ein fine-grained Token mit `Issues: write` genügt, wenn
 * der Token-Inhaber ohnehin Repo-Owner ist, wurde NICHT nachgeprüft. Es
 * spricht einiges dafür, aber niemand hat es laufen sehen. Antwortet die
 * Mutation mit 403 oder `Resource not accessible`, braucht es stattdessen ein
 * CLASSIC PAT mit `repo`-Scope — dann, und nur dann, ist `TOKEN_ADMIN` ein
 * anderes Token als das des Relays. Zeigt sich bei Handprobe H9.
 *
 * ⚠ `tokenAdmin` macht ZWEI Dinge: das öffentliche Issue anlegen (dieselbe
 * Rolle wie `TOKEN_OEFFENTLICH` im Relay) und das rohe löschen. Solange das
 * Löschen mit `Issues: write` geht, ist es dasselbe Token.
 *
 * ⚠⚠ Der Wächter dieser Datei (`tests/bericht-bot-invarianten.test.ts`)
 * durchsucht den Quelltext OHNE Kommentare — ein Kommentar darf also frei
 * benennen, was der Code tut, ohne die Reihenfolge-Proben zu verfälschen.
 */
const REPO_PRIVAT = 'Bl4ck969/AllMyBooks'
const REPO_OEFFENTLICH = 'Bl4ck969/AllMyBooks-releases'
const BERICHT_ROH_LABEL = 'bericht-roh'
const BERICHT_ROH_MARKE = '<!-- allmybooks-bericht-roh -->'

/** Sicherung 2: Ein Bericht wird binnen Sekunden angelegt, nicht binnen Stunden. */
const HOECHSTALTER_MINUTEN = 30

const kopf = (token) => ({
  Authorization: `Bearer ${token}`,
  Accept: 'application/vnd.github+json',
  'Content-Type': 'application/json',
  'User-Agent': 'AllMyBooks-Bericht-Aufraeumer',
})

async function legeAn(repo, token, titel, koerper, labels) {
  const antwort = await fetch(`https://api.github.com/repos/${repo}/issues`, {
    method: 'POST',
    headers: kopf(token),
    body: JSON.stringify({ title: titel, body: koerper, labels }),
  })
  if (!antwort.ok) return null
  const daten = await antwort.json()
  return { nummer: daten.number, url: daten.html_url }
}

/**
 * Schneidet den allgemeinen Teil aus dem rohen Markdown heraus.
 *
 * ⚠ Der Bot bekommt KEIN JSON — anders als der Relay sieht er nur den
 * fertigen Text. Geschnitten wird an der Überschrift „## Umgebung", die
 * `baueMarkdown` immer setzt; alles davor ist der Meldungsblock mit den
 * beiden Freitexten. Findet er sie nicht, nimmt er lieber ZU WENIG als zu
 * viel — ein zu knappes öffentliches Issue ist ärgerlich, ein zu volles ist
 * der Schaden, den dieser Bot verhindern soll.
 */
function schneideAllgemeinenTeil(roh) {
  const ohneMarke = roh.replace(BERICHT_ROH_MARKE, '').trim()
  const grenze = ohneMarke.indexOf('## Umgebung')
  if (grenze === -1) return '_Der Bericht liess sich nicht aufteilen; die Einzelheiten liegen intern vor._'
  return ohneMarke.slice(0, grenze).trim()
}

export async function raeumeAuf({ issue, tokenAdmin, tokenPrivat }) {
  const labels = (issue.labels ?? []).map((l) => (typeof l === 'string' ? l : l.name))
  const roh = issue.body ?? ''

  // Sicherung 1: BEIDE Merkmale.
  if (!labels.includes(BERICHT_ROH_LABEL) || !roh.includes(BERICHT_ROH_MARKE)) {
    return // nicht unser Issue
  }

  // Sicherung 2: Höchstalter.
  const alterMinuten = (Date.now() - new Date(issue.created_at).getTime()) / 60_000
  if (!Number.isFinite(alterMinuten) || alterMinuten > HOECHSTALTER_MINUTEN) {
    return // nicht unser Issue
  }

  const melderName = issue.user?.login ?? null
  const titel = issue.title ?? 'Fehlerbericht aus der Anwendung'

  // Sicherung 3, erster Teil: privat zuerst — dieselbe Reihenfolge wie im Relay.
  const privat = await legeAn(REPO_PRIVAT, tokenPrivat, titel, roh, ['fehlerbericht'])
  if (privat === null) return

  const erwaehnung =
    melderName === null
      ? ''
      : `\n\n_Gemeldet von @${melderName} — dein Bericht wurde aufgeteilt: die technischen Angaben liegen intern, damit sie nicht öffentlich stehen._`

  const allgemein =
    `${schneideAllgemeinenTeil(roh)}\n\n` +
    `_Technische Einzelheiten (Protokoll, Umgebung) liegen intern vor: ${REPO_PRIVAT}#${privat.nummer}_` +
    erwaehnung

  const oeffentlich = await legeAn(REPO_OEFFENTLICH, tokenAdmin, titel, allgemein, [
    'fehlerbericht',
  ])
  if (oeffentlich === null) return

  // Sicherung 3, zweiter Teil: Erst jetzt. Beide Ersatz-Issues stehen.
  await loesche(issue.node_id, tokenAdmin)
}

/**
 * Die eigentliche Löschung — ganz am Dateiende, bewusst.
 *
 * ⚠⚠ Sie steht NACH `raeumeAuf()`, nicht davor. `async function` ist eine
 * gehisste Deklaration, der Aufruf oben funktioniert also unverändert; der
 * Sinn der Platzierung ist rein LESBAR: Wer die Datei von oben liest, sieht
 * erst die drei Sicherungen und danach erst den Aufruf, der löscht — nicht
 * umgekehrt.
 */
async function loesche(knotenId, token) {
  const antwort = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: kopf(token),
    body: JSON.stringify({
      query: 'mutation($id: ID!) { deleteIssue(input: { issueId: $id }) { clientMutationId } }',
      variables: { id: knotenId },
    }),
  })
  const daten = await antwort.json()
  return antwort.ok && !daten.errors
}
