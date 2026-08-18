# AllMyBooks für Windows und Android

Die Apps zu deiner AllMyBooks-Bibliothek — als eigenes Fenster statt im Browser-Tab, und als App auf dem Handy.

Die **Windows-App** kann auf zwei Arten laufen: **eigenständig**, dann bringt sie Server und Datenbank selbst mit und braucht keinen weiteren Rechner. Oder als **Client** zu einem Server, der schon läuft — etwa auf einem NAS. Welche der beiden es sein soll, entscheidest du bei der Installation.

Die **Android-App** ist immer ein Client: Sie koppelt sich mit einem Server, der bereits läuft — dem Hub. Das kann ein NAS sein oder die eigenständige Windows-App auf deinem Rechner.

> ### 📖 [Das vollständige Handbuch](https://bl4ck969.github.io/AllMyBooks-releases/)
>
> Diese Seite hier ist die Kurzfassung. Im Handbuch steht alles ausführlich und mit Bildschirmfotos: der [Aufbau aus Server und Clients](https://bl4ck969.github.io/AllMyBooks-releases/#server-client), eine [Begriffserklärung](https://bl4ck969.github.io/AllMyBooks-releases/#begriffe), [jede Ansicht der Oberfläche einzeln](https://bl4ck969.github.io/AllMyBooks-releases/#oberflaeche) und eine [Fehlersuche](https://bl4ck969.github.io/AllMyBooks-releases/#fehlersuche).

## Download

| | |
|---|---|
| **[⬇️ Neueste Version](https://github.com/Bl4ck969/AllMyBooks-releases/releases/latest)** | Das willst du normalerweise |
| [Alle Versionen](https://github.com/Bl4ck969/AllMyBooks-releases/releases) | Ältere Fassungen und die Änderungsnotizen |
| [📖 Handbuch](https://bl4ck969.github.io/AllMyBooks-releases/) | Die vollständige Anleitung mit Bildschirmfotos |

Jedes Release enthält **beide** Apps:

| Datei | wofür |
|---|---|
| `AllMyBooks-Setup-<Version>.exe` | Windows |
| `AllMyBooks-<Version>.apk` | Android |
| `.blockmap` und `latest.yml` | braucht die Windows-App für ihre Updates — nicht anfassen |

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

Dort lässt sich auch das **Cover** schon bearbeiten, bevor das Buch in der Bibliothek steht: Ein Klick auf das Bild einer Karte öffnet den Editor zum Drehen, Zuschneiden und Geraderücken — genauso im Formular hinter dem Knopf **Bearbeiten**. Trägt der Eintrag noch gar kein Bild — der Normalfall bei Büchern aus einer Importdatei —, kannst du eines **fotografieren**, eine **Datei wählen** oder das beim Nachschlagen gefundene **Online-Cover übernehmen**.

### 5. Thalia-Konto verbinden (nur für E-Books)

**Einstellungen → Thalia**, danach **Import → Thalia-Sync**

Übernimmt die **Angaben zu** deinen gekauften E-Books — Titel, Autor, ISBN, Cover und Lesefortschritt — aus der Tolino-Cloud in deine Bibliothek. **Die Buchdateien selbst werden nicht heruntergeladen.** Es geht allein darum, dass deine E-Books im Bestand auftauchen, ohne sie von Hand einzutragen. Bitte lies dazu auch den Abschnitt [Rechtliches](#rechtliches).

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

### 7. Nach dem Import: Tags und Genres aufräumen

**Einstellungen → Tags** und **Einstellungen → Genres**

Nach einem größeren Import stehen dort schnell mehrere hundert Einträge — aus verschiedenen Quellen, in verschiedenen Schreibweisen. Beide Reiter sind gleich aufgebaut: links die vollständige Liste mit Suchfeld und der **Zahl der zugeordneten Titel**, rechts der gewählte Eintrag.

| Was | Wofür |
|---|---|
| **Umbenennen** | Schreibweise richten. Der neue Name gilt sofort für alle Titel |
| **In der Bibliothek** | Öffnet die Bibliothek, auf genau diesen Eintrag gefiltert |
| **Löschen** | Entfernt den Eintrag von allen Titeln. Die Bücher selbst bleiben unverändert |
| **Zuordnung lösen** | Nimmt einem einzelnen Titel das Tag bzw. Genre |
| **Titel zuordnen** | Suchen, mehrere markieren, in einem Zug zuordnen |

Die Zahl neben jedem Eintrag ist dabei die eigentliche Auskunft: Eine **0** heißt, dass der Eintrag an keinem Buch mehr hängt und weg kann.

> **Umbenennen auf einen vorhandenen Namen führt zusammen.** Aus zwei Einträgen wird dann einer, und alle Titel wandern hinüber. Meistens ist das genau das Gewünschte — AllMyBooks fragt vorher trotzdem nach, denn rückgängig machen lässt es sich nicht.

Diese beiden Reiter sind **Administratoren vorbehalten**.

---

## Updates

Die App prüft **beim Start und danach stündlich**, ob eine neue Version vorliegt, und lädt sie **im Hintergrund**. Du kannst dabei normal weiterarbeiten. Erst wenn der Download fertig ist, wirst du gefragt:

- **Jetzt neu starten** — das Update wird sofort eingespielt, die App startet kurz neu
- **Später** — das Update bleibt liegen

> ⚠️ **Bei „Später" passiert nichts von selbst — auch nicht beim Beenden.**
> Du spielst es ein über **„Aktualisieren auf \<Version\>"** im Symbol neben der Uhr, oder über **Einstellungen → Programmversion → Jetzt neu starten und einspielen**.
>
> Das ist Absicht: Früher installierte sich das Update beim Beenden von selbst, und damit war die Wahl „Später" wertlos, sobald man das Fenster versehentlich schloss.

**Du kannst jederzeit selbst nachsehen.** Im Symbol neben der Uhr steht immer ein Eintrag dafür, und er sagt dir gleich, woran du bist:

| Was dort steht | Was es bedeutet |
|---|---|
| *Auf Aktualisierungen prüfen* | noch nicht nachgesehen — ein Klick startet die Suche |
| *Suche nach Aktualisierungen …* | läuft gerade |
| *Aktuell — erneut prüfen* | zuletzt war nichts Neues da |
| *Lädt Fassung X … 42 %* | ein Update kommt gerade herunter |
| *Aktualisieren auf X* | fertig geladen, wartet auf deinen Klick |
| *Prüfung fehlgeschlagen — erneut versuchen* | kam nicht durch, meist fehlt die Internetverbindung |

Schlägt die Prüfung fehl, bleibt es ansonsten still — deine Bibliothek ist davon nicht betroffen, sie läuft über deinen eigenen Server.

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

## Die App auf dem Handy (Android)

Lade **`AllMyBooks-<Version>.apk`** aus dem Release und öffne sie auf dem Handy. Android fragt dabei einmalig, ob es Apps aus dieser Quelle installieren darf — die App kommt nicht aus dem Play Store.

### Mit deinem Hub verbinden

Die App braucht einen Server, mit dem sie sich verbindet. Auf dem Rechner, auf dem er läuft:

1. **Geräte** öffnen → **Gerät koppeln**
2. Der Dialog zeigt einen QR-Code, darunter Adresse und einen achtstelligen Code
3. In der App auf **QR-Code aufnehmen** — oder beides von Hand eintippen

> ⚠️ **Beim Abtippen ist die Adresse die häufigste Fehlerquelle.** Sie muss die Form `http://192.168.1.50:3004` haben — mit Punkten zwischen den Zahlen, ohne Leerzeichen. Die Bildschirmtastatur macht aus einem Punkt gern ein Leerzeichen, und eine fehlende Ziffer sieht man leicht. **Der QR-Code umgeht das vollständig.**
>
> Werden mehrere Adressen angeboten, steht die aus deinem Heimnetz zuerst.
>
> ⚠️ Verbunden wird **nur ins eigene Netz**. Eine Adresse, die aus dem Heimnetz hinausführt, lehnt die App ab — unverschlüsselt gingen dort sonst Benutzername und Passwort hinaus. Für einen Server ausserhalb braucht es eine Adresse mit `https://`.

### Updates

**Die App sagt dir beim Start Bescheid**, wenn eine neue Fassung bereitliegt — mit der Wahl *jetzt schliessen und installieren* oder *später*. Bei „Später" fragt sie beim nächsten Start noch einmal.

Nachsehen kannst du jederzeit selbst: in den **Einstellungen** unter **App-Aktualisierung**. Dort steht auch die installierte Fassung.

> ⚠️ **Beim ersten Mal fragt Android nach einer Erlaubnis** („Unbekannte Apps installieren"). Der Weg dorthin ist schwer zu finden, deshalb führt dich ein Knopf direkt hin. Daneben steht immer der Weg von Hand über den Release-Bereich, falls etwas klemmt.
>
> Anders als bei Windows lädt die App **nicht** von selbst im Hintergrund. Sie prüft nur, ob es etwas Neues gibt; heruntergeladen wird erst, wenn du zustimmst.

### Was die App kann und was nicht

Sie zeigt deine Bibliothek, Personen, Cover und Lagerorte, kann Bücher als gelesen markieren, Favoriten setzen und ISBN-Codes über die Kamera einlesen. Sie braucht dafür **Verbindung zum Hub** — ohne ihn zeigt sie nichts an.

---

## Einen Fehler melden

In der App und im Windows-Client: **Menü → Fehler melden**. Fünf kurze Fragen — wo, wann, was du tun wolltest, was stattdessen passierte, wie oft. Ausfüllen musst du nur eines der beiden Textfelder; ein Bericht ohne Worte ist mehr wert als keiner. Ein GitHub-Konto brauchst du nicht.

**Deine Beschreibung wird öffentlich**: Sie erscheint hier als Issue, damit andere dasselbe Problem wiedererkennen und sehen, wann es behoben wurde. **Das technische Protokoll geht nicht öffentlich mit** — es landet dort, wo die Entwicklung es lesen kann.

> Unter **„Anzeigen, was gesendet wird"** stehen beide Teile getrennt und wörtlich, **bevor** du absendest. Der vollständige Bericht lässt sich von dort auch in die Zwischenablage legen.

> ⚠️ **Antwortet der Melde-Dienst gerade nicht**, bietet die App ersatzweise ein GitHub-Formular an. Auf diesem Weg steht der **ganze** Bericht für kurze Zeit öffentlich, auch das Protokoll — die App sagt das vorher und fragt nach. Wenige Augenblicke später teilt ein Automat den Bericht auf und nimmt die technischen Angaben aus dem öffentlichen Teil wieder heraus.

**Endet die App unerwartet**, fragt sie beim nächsten Start, ob du das melden möchtest — mit dem Protokoll der Minuten davor. Nur eine Frage; von selbst wird nichts gesendet. Wer die App aus der Übersicht wischt, bekommt dieselbe Frage, denn Android unterscheidet beides nicht; sie lässt sich wegtippen. Der Windows-Client vermerkt ein unerwartetes Ende vorerst nur in seinem Protokoll, ohne zu fragen.

---

## Wo deine Daten liegen

Unter **`%APPDATA%\AllMyBooks`** — Datenbank, Buchcover, Personenfotos und Sicherungen. Dieser Ordner überlebt jedes Update, und auch eine **Deinstallation lässt ihn stehen**. Wer wirklich alles loswerden will, löscht ihn danach von Hand.

## Dieses Repository

Hier liegen ausschließlich die fertigen Installationsdateien. Der Quellcode wird an anderer Stelle entwickelt. Beide Apps holen sich ihre Updates direkt aus dem [Release-Bereich](https://github.com/Bl4ck969/AllMyBooks-releases/releases) dieses Repositories.

Dazu kommt das **[Handbuch](https://bl4ck969.github.io/AllMyBooks-releases/)** — es liegt als HTML-Seite unter [`docs/`](docs/) und wird über GitHub Pages ausgeliefert. Es lädt nichts von fremden Servern nach: keine Schriftarten, keine Zählpixel, keine Skripte Dritter.

---

## Rechtliches

AllMyBooks ist ein **privates Projekt** und steht **in keiner Verbindung zu Thalia, tolino, Google oder einem anderen der genannten Anbieter**. Es wird von ihnen weder herausgegeben noch geprüft oder unterstützt. *Thalia*, *tolino* und die übrigen genannten Namen sind Marken ihrer jeweiligen Inhaber und werden hier ausschließlich genannt, um zu beschreiben, womit die Software zusammenarbeitet.

### Zum Thalia-Abgleich

Der Abgleich meldet sich mit **deinen eigenen Zugangsdaten** an und liest **ausschließlich die Daten deines eigenen Kontos**: Titel, Autor, ISBN, Cover und Lesefortschritt deiner gekauften E-Books.

**Nicht** heruntergeladen werden die Buchdateien. Es wird kein Kopierschutz umgangen, nichts vervielfältigt und nichts an Dritte weitergegeben. Deine Zugangsdaten liegen verschlüsselt auf deinem eigenen System und werden an niemanden außer Thalia selbst gesendet.

Gleichwohl, offen gesagt: Die verwendete Schnittstelle ist nicht für den Zugriff durch fremde Software vorgesehen. **Die Nutzung dieser Funktion kann den Nutzungsbedingungen von Thalia widersprechen und erfolgt auf eigene Verantwortung.** Wer das nicht möchte, lässt sie einfach ungenutzt — **alle übrigen Funktionen arbeiten vollständig unabhängig davon.**

### Gewährleistung

Die Software wird bereitgestellt, wie sie ist, ohne Zusicherung irgendeiner Art. Die Nutzung erfolgt auf eigenes Risiko; für Schäden oder Datenverlust wird keine Haftung übernommen.

**Lege Sicherungen an** (siehe [Teil 2, Punkt 1](#1-sicherungen-einrichten)) — das gilt für jede Software, die deine Daten verwaltet.
