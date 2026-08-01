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

## Teil 1 — Installation

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

**Client:** Trage die Adresse deines Servers ein, zum Beispiel `192.168.1.50:3004`. Die App prüft sie sofort und sagt dir, woran es liegt, wenn dort niemand antwortet. Danach meldest du dich mit deinen gewohnten Zugangsdaten an.

---

## Teil 2 — Die ersten Schritte in der App

Läuft alles, bist du angemeldet und die Bibliothek ist leer. Diese Reihenfolge erspart dir Nacharbeit — **die Punkte 1 bis 3 lohnen sich, bevor die ersten Bücher drin sind.**

Alles Folgende findest du unter **Einstellungen** (Zahnrad in der Seitenleiste, nur für Administratoren) oder unter **Import**.

### 1. Sicherungen einrichten

**Einstellungen → Sicherungen**

Zuerst, nicht zuletzt — eine Sicherung nützt erst ab dem Zeitpunkt, ab dem sie läuft.

- **Sicherungs-Ordner** — wohin die Sicherungen geschrieben werden. In der **eigenständigen** Betriebsart frei wählbar (etwa ein Ordner in deiner Cloud-Ablage). Bei einem Server im Container ist er **fest** und wird nur angezeigt — dort bestimmt ihn der eingehängte Ordner.
- **Zeitplan** — Häufigkeit und Uhrzeit, etwa täglich um 01:00.
- **Aufbewahrung** — nach wie vielen Tagen und ab welcher Anzahl alte Sicherungen aufgeräumt werden. Bleiben beide leer, wird **nie** aufgeräumt.

> ⚠️ **Eigenständige Betriebsart: der Zeitplan greift nur, solange die Anwendung läuft.**
> Die Zeitsteuerung sitzt im Server dieser Installation, und der wird zusammen mit dem Programm beendet. Ist AllMyBooks zur eingestellten Zeit geschlossen, wird **keine Sicherung erstellt — und sie wird auch nicht nachgeholt.** Lass die Anwendung dafür geöffnet oder erstelle die Sicherung von Hand.
>
> Dasselbe gilt für den Thalia-Zeitplan weiter unten. Bei einem Server im Container besteht das Problem nicht — der läuft durch.

Unter **Sicherungen** in der Seitenleiste erstellst du jederzeit eine von Hand, lädst welche herunter oder spielst eine zurück.

### 2. Google-Books-Schlüssel hinterlegen

**Einstellungen → Metadaten-Quellen**

AllMyBooks holt Buchdaten aus zwei Quellen: der **Deutschen Nationalbibliothek** (voreingestellt, braucht nichts) und **Google Books**. Google liefert vor allem die **Buchcover** — die DNB liefert keine.

Ohne Schlüssel funktioniert Google trotzdem, aber nur mit rund **100 Abfragen pro Tag**. Mit einem eigenen, **kostenlosen** Schlüssel sind es etwa **1.000**. Bei einem größeren Erstimport ist das der Unterschied zwischen „läuft durch" und „bricht nach 100 Büchern ab".

Die Einstellungsseite enthält eine bebilderte Schritt-für-Schritt-Anleitung dafür (Google-Konto → Projekt anlegen → *Books API* aktivieren → Schlüssel kopieren). Der Schlüssel wird **verschlüsselt** in der Datenbank abgelegt.

### 3. Lagerorte anlegen

**Lagerorte** in der Seitenleiste

Wo deine Bücher tatsächlich stehen: „Wohnzimmer-Regal", „Keller-Kiste", „Thalia-Cloud". Je Lagerort legst du fest, welche Ausgaben dort zulässig sind — **leer bedeutet: alle**. Ein paar Lagerorte sind bereits angelegt; ergänze sie, bevor du importierst, dann landen die Bücher gleich richtig.

### 4. Bücher hineinbekommen

**Import** in der Seitenleiste, mehrere Wege nebeneinander:

| Weg | Wofür |
|---|---|
| **ISBN-/Titel-Suche** | Einzelne Bücher. ISBN eintippen oder nach Titel und Autor suchen |
| **Bookshelf-CSV** | Umzug aus *iCollect Bookshelf* — ein Assistent führt durch die Zuordnung der Lagerorte |
| **Meine Bibliothek XLSX** | Umzug aus *Meine Bibliothek* |
| **Thalia-Sync** | Deine E-Books aus der Tolino-Cloud, siehe unten |
| **Manuell** | Alles von Hand, wenn keine Quelle etwas findet |

Bücher, die beim Import unklar bleiben, landen im Reiter **Unbearbeitet** und warten dort auf dich — nichts geht verloren.

### 5. Thalia-Konto verbinden (nur für E-Books)

**Einstellungen → Thalia**, danach **Import → Thalia-Sync**

Holt deine gekauften E-Books samt Cover aus der Tolino-Cloud in die Bibliothek.

- **Benutzername** und **Passwort** deines Thalia-Kontos. Das Passwort wird **verschlüsselt** gespeichert und ist danach auch für dich nicht mehr auslesbar — bei Bedarf einfach neu eintragen.
- **Lesestatus zuordnen zu** — welchem Benutzer die Lese-Ereignisse aus der Cloud gutgeschrieben werden. Nützlich, wenn zwei Personen dieselbe Bibliothek nutzen, aber nur ein Thalia-Konto besteht.

Im Reiter **Thalia-Sync** startest du den Abgleich von Hand oder stellst einen Zeitplan ein — für den gilt derselbe Vorbehalt wie bei den Sicherungen (siehe oben).

E-Books ohne ISBN landen in **Unbearbeitet** statt einfach zu verschwinden.

### 6. Optional: KI für Cover und Klappentexte

**Einstellungen → Vision / AI-Cover-Erkennung**

Rein freiwillig — **ohne das funktioniert alles**, es ist nur bequemer. Damit kann AllMyBooks ein abfotografiertes Cover erkennen und den Klappentext von der Rückseite als Beschreibung übernehmen.

Hinterlegbar sind ein **Gemini-** oder **Claude-Schlüssel** oder eine **Ollama-Adresse** für ein Modell auf dem eigenen Rechner. Über die **Provider-Reihenfolge** legst du fest, wer zuerst gefragt wird. Ohne jeden Eintrag bleibt nur die Texterkennung, die immer mitläuft.

> Für Ollama in einem Container gilt: `localhost` zeigt dort auf den Container selbst. Trage die Netzwerkadresse des Rechners ein, etwa `http://192.168.1.50:11434`, und benutze ein Modell, das Bilder versteht.

---

## Updates

Die App prüft **beim Start und danach stündlich**, ob eine neue Version vorliegt, und lädt sie **im Hintergrund**. Du kannst dabei normal weiterarbeiten. Erst wenn der Download fertig ist, wirst du gefragt:

- **Jetzt neu starten** — das Update wird sofort eingespielt, die App startet kurz neu
- **Später** — das Update bleibt liegen

> ⚠️ **Bei „Später" passiert nichts von selbst — auch nicht beim Beenden.**
> Du spielst es ein über **„Aktualisieren auf \<Version\>"** im Symbol neben der Uhr, oder über **Einstellungen → Programmversion → Jetzt neu starten und einspielen**.
>
> Das ist Absicht: Früher installierte sich das Update beim Beenden von selbst, und damit war die Wahl „Später" wertlos, sobald man das Fenster versehentlich schloss.

Schlägt die Prüfung fehl, bleibt es still — meist fehlt einfach gerade die Internetverbindung. Deine Bibliothek ist davon nicht betroffen, sie läuft über deinen eigenen Server.

**Deine Daten und Einstellungen überstehen jedes Update** — auch die hinterlegten Schlüssel und das Thalia-Konto.

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

**Das Fenster zu schließen beendet die App nicht** — sie läuft neben der Uhr weiter. Zum echten Beenden den Eintrag *Beenden* benutzen.

In den **Einstellungen der App** (nicht zu verwechseln mit den Einstellungen *in* der Bibliothek) verwaltest du unter *Datenquellen* mehrere Server nebeneinander, legst unter *Programm-Verhalten* fest, ob die App mit Windows startet, und siehst unter *Programmversion* den aktuellen Stand.

---

## Voraussetzungen

- **Windows 10 oder 11**, 64 Bit
- Bei **Client-Installation** zusätzlich: eine laufende AllMyBooks-Serverinstanz im Netzwerk, auf die du Zugangsdaten hast

Bei eigenständiger Installation brauchst du nichts weiter — Server und Datenbank sind mit dabei.

## Wo deine Daten liegen

Unter **`%APPDATA%\AllMyBooks`** — Datenbank, Buchcover, Personenfotos und Sicherungen. Dieser Ordner überlebt jedes Update, und auch eine **Deinstallation lässt ihn stehen**. Wer wirklich alles loswerden will, löscht ihn danach von Hand.

## Dieses Repository

Hier liegen ausschließlich die fertigen Installationsdateien. Der Quellcode wird an anderer Stelle entwickelt. Die App holt sich ihre Updates direkt aus dem [Release-Bereich](https://github.com/Bl4ck969/AllMyBooks-releases/releases) dieses Repositories.
