# AllMyBooks — Releases

Dieses Repository enthaelt **ausschliesslich die gebauten Artefakte** des
AllMyBooks-Windows-Clients: den Installer, die `latest.yml` fuer die
Update-Pruefung und die zugehoerige `.blockmap`.

**Hier liegt kein Quellcode.** Der Code lebt in einem privaten Repository.
Dieses oeffentliche Repo existiert nur, weil `electron-updater` die Releases
ohne Anmeldung lesen koennen muss — andernfalls muesste ein Zugangstoken im
ausgelieferten Programm stecken.

## Fuer wen ist das?

Der Client ist eine Huelle: er verbindet sich mit einem **eigenen
AllMyBooks-Server** und fragt beim Start nach dessen Adresse. Ohne einen
solchen Server und ohne Zugangsdaten laesst sich mit dem Programm nichts
anfangen.

## Installer

Die jeweils neueste Fassung steht unter **Releases**. Der Installer ist
**nicht signiert** — Windows SmartScreen meldet deshalb beim ersten Start
„Windows hat Ihren PC geschuetzt". Ueber „Weitere Informationen" →
„Trotzdem ausfuehren" laesst sich die Installation fortsetzen.

Eine installierte Fassung haelt sich ueber diese Releases selbst aktuell.
