# AllMyBooks für Windows

Die Desktop-App zu deiner AllMyBooks-Bibliothek — als eigenes Fenster statt im Browser-Tab.

**[→ Neueste Version herunterladen](../../releases/latest)**

## Was sie kann

- **Eigenes Fenster** für deine Bibliothek, mit gemerkter Größe und Position
- **Mehrere Server** verwalten und mit einem Klick umschalten — praktisch, wenn du neben dem Hauptserver noch einen zweiten betreibst
- **Symbol neben der Uhr**: Fenster wegklicken statt beenden, Server wechseln, Einstellungen öffnen
- **Mit Windows starten**, auf Wunsch direkt minimiert
- **Hält sich selbst aktuell** — meldet sich, wenn eine neue Version bereitliegt, und fragt, ob sofort oder beim nächsten Beenden

## Installation

1. Die `.exe` aus dem neuesten Release herunterladen und starten
2. Installationsordner wählen und entscheiden, ob ein Startmenü-Eintrag angelegt wird
3. Beim ersten Start die Adresse deines AllMyBooks-Servers eintragen, zum Beispiel `192.168.178.95:3004`

Die Installation läuft **ohne Administratorrechte** und landet in deinem Benutzerprofil. Updates ebenso — keine Rückfrage von Windows.

### Windows-Warnung beim ersten Start

Die App ist nicht kostenpflichtig signiert. Windows meldet deshalb *„Der Computer wurde durch Windows geschützt"*:

**Weitere Informationen** → **Trotzdem ausführen**

Das ist einmalig pro Installation.

## Voraussetzungen

- Windows 10 oder 11 (64 Bit)
- Eine laufende **AllMyBooks-Serverinstanz** im Netzwerk, auf die du Zugangsdaten hast

Die App ist die Oberfläche zu deinem eigenen Server — sie bringt keine eigene Datenbank mit und speichert deine Bücher nicht in der Cloud.

## Updates

Die App prüft beim Start und danach stündlich, ob etwas Neues vorliegt, und lädt es im Hintergrund. Erst wenn es fertig ist, wirst du gefragt: **jetzt neu starten** oder **später**.

Bei *später* passiert es beim nächsten Beenden von selbst — oder du stößt es über **Aktualisieren** im Symbol-Menü an. Unter *Einstellungen → Programmversion* siehst du jederzeit, welche Version läuft, und kannst von Hand nach Updates suchen.

## Dieses Repository

Hier liegen die fertigen Installationsdateien. Der Quellcode wird an anderer Stelle entwickelt.
