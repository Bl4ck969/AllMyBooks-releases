# AllMyBooks für Windows

Die Desktop-App zu deiner AllMyBooks-Bibliothek — als eigenes Fenster statt im Browser-Tab.

Sie kann auf zwei Arten laufen: **eigenständig**, dann bringt sie Server und Datenbank selbst mit und braucht keinen weiteren Rechner. Oder als **Client** zu einem Server, der schon läuft — etwa auf einem NAS. Welche der beiden es sein soll, entscheidest du bei der Installation.

## Download

| | |
|---|---|
| **[⬇️ Neueste Version](https://github.com/Bl4ck969/AllMyBooks-releases/releases/latest)** | Das willst du normalerweise |
| [Alle Versionen](https://github.com/Bl4ck969/AllMyBooks-releases/releases) | Ältere Fassungen und die Änderungsnotizen |

Lade die Datei **`AllMyBooks-Setup-<Version>.exe`** herunter. Die beiden anderen Dateien im Release (`.blockmap` und `latest.yml`) braucht die App selbst für ihre Updates — du musst sie nicht anfassen.

---

## Erstinstallation

### 1. Windows-Warnung wegklicken

Die App ist nicht kostenpflichtig signiert. Windows meldet deshalb beim ersten Start des Installers:

> **Der Computer wurde durch Windows geschützt**

Klicke auf **Weitere Informationen** und dann auf **Trotzdem ausführen**. Das ist einmalig pro Installation.

### 2. Betriebsart wählen

Die erste Seite des Installers stellt die einzige Frage, die du vorher überlegt haben solltest:

**Eigenständig — dieser PC verwaltet die Bücher selbst**
Bringt Server und Datenbank mit. Es wird kein weiterer Rechner gebraucht. Belegt rund 500 MB mehr Platz. **Das ist die Voreinstellung** und der Weg, der ohne Vorwissen funktioniert.

**Mit einem vorhandenen Server verbinden**
Für einen Server, der schon läuft — etwa auf einem NAS oder einem anderen PC. Die Adresse wird beim ersten Start abgefragt, du brauchst sie also griffbereit.

> **Diese Frage kommt bewusst vor der Ordnerwahl**, weil der Platzbedarf davon abhängt. Wählst du „Client", werden die Server-Teile **gar nicht erst ausgepackt** — die Installation ist dann deutlich kleiner und schneller.

### 3. Ordner und Startmenü

Danach folgen Installationsordner und die Frage nach einem Startmenü-Eintrag.

Die Installation läuft **ohne Administratorrechte** und landet in deinem Benutzerprofil unter `%LOCALAPPDATA%\Programs`. Updates ebenso — Windows fragt dabei nie nach.

### 4. Erster Start

**Eigenständig:** Beim allerersten Start richtet die App ihre Datenbank ein, das dauert einen Moment. Danach öffnet sich die Bibliothek und führt dich durch die Einrichtung: Benutzername, Passwort und vier Sicherheitsfragen. Der erste angelegte Benutzer wird automatisch Administrator.

**Client:** Trage die Adresse deines Servers ein, zum Beispiel `192.168.178.95:3004`. Die App prüft sie sofort und sagt dir, woran es liegt, wenn dort niemand antwortet. Danach meldest du dich mit deinen gewohnten Zugangsdaten an.

---

## Updates

Die App prüft **beim Start und danach stündlich**, ob eine neue Version vorliegt, und lädt sie **im Hintergrund**. Du kannst dabei normal weiterarbeiten. Erst wenn der Download fertig ist, wirst du gefragt:

- **Jetzt neu starten** — das Update wird sofort eingespielt, die App startet kurz neu
- **Später** — das Update bleibt liegen

> ⚠️ **Bei „Später" passiert nichts von selbst — auch nicht beim Beenden.**
> Du spielst es ein über **„Aktualisieren auf \<Version\>"** im Symbol neben der Uhr, oder über **Einstellungen → Programmversion → Jetzt neu starten und einspielen**.
>
> Das ist Absicht: Früher installierte sich das Update beim Beenden von selbst, und damit war die Wahl „Später" wertlos, sobald man das Fenster versehentlich schloss.

Schlägt die Prüfung fehl, bleibt es still — meist fehlt einfach gerade die Internetverbindung. Deine Bibliothek ist davon nicht betroffen, sie läuft über deinen eigenen Server. Unter **Einstellungen → Programmversion** siehst du jederzeit, welche Version läuft, und kannst mit **Nach Update suchen** selbst nachsehen.

### Neu installieren über eine bestehende Installation

Der Installer **fragt die Betriebsart kein zweites Mal** — er merkt sich deine Wahl. Ein versehentlicher Klick kann dir die Betriebsart also nicht umstellen.

---

## Die Bedienung in Kürze

**Symbol neben der Uhr** (Rechtsklick):

| Eintrag | Was er tut |
|---|---|
| *Verbunden: \<Name\>* | Zeigt, mit welcher Datenquelle du gerade arbeitest |
| *Wechseln zu …* | Schaltet auf eine andere Datenquelle um |
| *Aktualisieren auf …* | Erscheint nur, wenn ein Update bereitliegt |
| *Fenster zeigen* | Holt das Fenster zurück |
| *Einstellungen* | Datenquellen, Programm-Verhalten, Version |
| *Beenden* | Beendet die App wirklich |

**Das Fenster zu klicken beendet die App nicht** — sie läuft neben der Uhr weiter. Zum echten Beenden den Eintrag *Beenden* benutzen.

In den **Einstellungen** verwaltest du unter *Datenquellen* mehrere Server nebeneinander (samt „Dieser PC", falls eigenständig installiert), legst unter *Programm-Verhalten* fest, ob die App mit Windows startet, und siehst unter *Programmversion* den aktuellen Stand.

---

## Voraussetzungen

- **Windows 10 oder 11**, 64 Bit
- Bei **Client-Installation** zusätzlich: eine laufende AllMyBooks-Serverinstanz im Netzwerk, auf die du Zugangsdaten hast

Bei eigenständiger Installation brauchst du nichts weiter — Server und Datenbank sind mit dabei.

## Wo deine Daten liegen

Unter **`%APPDATA%\AllMyBooks`** — Datenbank, Buchcover, Personenfotos und Sicherungen. Dieser Ordner überlebt jedes Update, und auch eine **Deinstallation lässt ihn stehen**. Wer wirklich alles loswerden will, löscht ihn danach von Hand.

## Dieses Repository

Hier liegen ausschließlich die fertigen Installationsdateien. Der Quellcode wird an anderer Stelle entwickelt. Die App holt sich ihre Updates direkt aus dem [Release-Bereich](https://github.com/Bl4ck969/AllMyBooks-releases/releases) dieses Repositories.
