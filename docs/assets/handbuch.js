/* ==========================================================================
   AllMyBooks — Handbuch
   Inhaltsverzeichnis, Suche, Themenwechsel, Bildlupe.
   Kein Fremdcode, keine externen Anfragen.
   ========================================================================== */
(() => {
  'use strict'

  /* --- Helles oder dunkles Thema ---------------------------------------
     Gespeichert wird nur die AUSDRÜCKLICHE Wahl. Ohne Wahl gilt weiterhin
     die Einstellung des Betriebssystems — deshalb steht hier kein
     Vorgabewert, der sie überschriebe. */
  const wurzel = document.documentElement
  const schalter = document.getElementById('thema-schalter')

  const zeige = (element, sichtbar) => {
    if (sichtbar) element.removeAttribute('hidden')
    else element.setAttribute('hidden', '')
  }

  const setzeThema = (wert) => {
    if (wert) wurzel.setAttribute('data-thema', wert)
    else wurzel.removeAttribute('data-thema')
    if (!schalter) return
    const dunkelAktiv = wert
      ? wert === 'dunkel'
      : window.matchMedia('(prefers-color-scheme: dark)').matches
    schalter.setAttribute('aria-label', dunkelAktiv ? 'Helles Thema' : 'Dunkles Thema')
    schalter.setAttribute('title', dunkelAktiv ? 'Helles Thema' : 'Dunkles Thema')
    // ACHTUNG: NICHT `el.hidden = true` verwenden. Die Eigenschaft ist auf
    // HTMLElement definiert; bei einem SVG-Element legt die Zuweisung nur eine
    // gewoehnliche JS-Eigenschaft an und setzt KEIN Attribut — das Symbol
    // bliebe unveraendert stehen. Gemessen am 15.08.2026.
    zeige(schalter.querySelector('.symbol-hell'), dunkelAktiv)
    zeige(schalter.querySelector('.symbol-dunkel'), !dunkelAktiv)
  }

  let gespeichert = null
  try { gespeichert = localStorage.getItem('amb-handbuch-thema') } catch { /* Privatmodus */ }
  setzeThema(gespeichert)

  schalter?.addEventListener('click', () => {
    const dunkelJetzt = wurzel.getAttribute('data-thema')
      ? wurzel.getAttribute('data-thema') === 'dunkel'
      : window.matchMedia('(prefers-color-scheme: dark)').matches
    const neu = dunkelJetzt ? 'hell' : 'dunkel'
    setzeThema(neu)
    try { localStorage.setItem('amb-handbuch-thema', neu) } catch { /* Privatmodus */ }
  })

  /* --- Ankerlinks an jede Überschrift ---------------------------------- */
  for (const ueberschrift of document.querySelectorAll('.inhalt h2[id], .inhalt h3[id]')) {
    const a = document.createElement('a')
    a.className = 'ankerlink'
    a.href = '#' + ueberschrift.id
    a.textContent = '#'
    a.setAttribute('aria-label', 'Verweis auf diesen Abschnitt')
    ueberschrift.appendChild(a)
  }

  /* --- Aktiver Eintrag im Inhaltsverzeichnis ---------------------------
     Beobachtet wird der obere Rand des Sichtfensters. Ohne den unteren
     Randabzug meldeten mehrere Abschnitte gleichzeitig "sichtbar", und die
     Markierung sprang beim Blättern hin und her. */
  const verweise = new Map()
  for (const a of document.querySelectorAll('.iv__liste a')) {
    const ziel = document.getElementById(decodeURIComponent(a.hash.slice(1)))
    if (ziel) verweise.set(ziel, a)
  }

  let letzterAktiver = null
  const markiere = (a) => {
    if (a === letzterAktiver) return
    letzterAktiver?.classList.remove('aktiv')
    a?.classList.add('aktiv')
    letzterAktiver = a
    if (a && window.innerWidth > 960) {
      const leiste = document.querySelector('.leiste')
      const oben = a.offsetTop - leiste.clientHeight / 2
      if (Math.abs(leiste.scrollTop - oben) > leiste.clientHeight / 3) {
        leiste.scrollTo({ top: Math.max(0, oben), behavior: 'smooth' })
      }
    }
  }

  if ('IntersectionObserver' in window && verweise.size) {
    const sichtbar = new Set()
    const waechter = new IntersectionObserver((eintraege) => {
      for (const e of eintraege) {
        if (e.isIntersecting) sichtbar.add(e.target)
        else sichtbar.delete(e.target)
      }
      if (!sichtbar.size) return
      // Der oberste sichtbare Abschnitt gewinnt.
      const oberster = [...sichtbar].sort(
        (a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top,
      )[0]
      markiere(verweise.get(oberster))
    }, { rootMargin: '-72px 0px -65% 0px', threshold: 0 })

    for (const ziel of verweise.keys()) waechter.observe(ziel)
  }

  /* --- Suche im Inhaltsverzeichnis -------------------------------------- */
  const suchfeld = document.getElementById('suchfeld')
  const leermeldung = document.getElementById('such-leer')

  // Umlaute und ß mitsuchen: wer "uebersicht" tippt, soll "Übersicht" finden.
  const vereinfache = (text) => text
    .toLowerCase()
    .replace(/ä/g, 'ae').replace(/ö/g, 'oe').replace(/ü/g, 'ue').replace(/ß/g, 'ss')

  const eintraege = [...document.querySelectorAll('.iv__liste li')].map((li) => ({
    li,
    text: vereinfache(li.textContent + ' ' + (li.dataset.schlagworte || '')),
  }))
  const gruppen = [...document.querySelectorAll('.iv__gruppe')]

  suchfeld?.addEventListener('input', () => {
    const wort = vereinfache(suchfeld.value.trim())
    let treffer = 0
    for (const e of eintraege) {
      const passt = !wort || e.text.includes(wort)
      e.li.classList.toggle('versteckt', !passt)
      if (passt) treffer++
    }
    for (const g of gruppen) {
      const sichtbareKinder = g.querySelectorAll('.iv__liste li:not(.versteckt)').length
      g.classList.toggle('versteckt', sichtbareKinder === 0)
    }
    leermeldung?.classList.toggle('zeigen', Boolean(wort) && treffer === 0)
  })

  // Escape leert das Feld, "/" springt hinein.
  suchfeld?.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { suchfeld.value = ''; suchfeld.dispatchEvent(new Event('input')) }
  })
  document.addEventListener('keydown', (e) => {
    if (e.key !== '/' || e.ctrlKey || e.metaKey || e.altKey) return
    const feld = document.activeElement
    if (feld && ['INPUT', 'TEXTAREA'].includes(feld.tagName)) return
    e.preventDefault()
    suchfeld?.focus()
  })

  /* --- Leiste auf kleinen Bildschirmen ---------------------------------- */
  const menueknopf = document.getElementById('menue-knopf')
  const leiste = document.querySelector('.leiste')

  menueknopf?.addEventListener('click', () => {
    const offen = leiste.classList.toggle('offen')
    menueknopf.setAttribute('aria-expanded', String(offen))
  })
  leiste?.addEventListener('click', (e) => {
    if (e.target.closest('a')) {
      leiste.classList.remove('offen')
      menueknopf?.setAttribute('aria-expanded', 'false')
    }
  })

  /* --- Bildlupe ---------------------------------------------------------
     Ein Bildschirmfoto ist bei 50 rem Spaltenbreite kaum lesbar; ein Klick
     zeigt es in voller Grösse. */
  const lupe = document.getElementById('lupe')
  const lupenbild = lupe?.querySelector('img')
  let zuletztGeklickt = null

  document.addEventListener('click', (e) => {
    const bild = e.target.closest('figure img')
    if (!bild || !lupe) return
    zuletztGeklickt = bild
    lupenbild.src = bild.currentSrc || bild.src
    lupenbild.alt = bild.alt
    lupe.classList.add('offen')
    lupe.querySelector('.lupe__zu').focus()
    document.body.style.overflow = 'hidden'
  })

  const schliesseLupe = () => {
    if (!lupe?.classList.contains('offen')) return
    lupe.classList.remove('offen')
    lupenbild.src = ''
    document.body.style.overflow = ''
    zuletztGeklickt?.focus?.()
  }

  lupe?.addEventListener('click', schliesseLupe)
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') schliesseLupe() })
})()
