Kedves Reviewer!

Ezúton is köszönöm, hogy időt szán a kódom áttekintésére! Angular fejlesztőként sajnos nincs sok tapasztalatom kriptográfia területén, ez számomra új terület, de annál érdekesebb/kihívásokkal teli(főképpen a gyakorlat), illetve backennd oldalon is régen fejlesztettem, de hű maradva a feladat címéhez (javascript), nodeJs-re esett a választásom BE oldalon (mindig is szerettem volna kipróbálni).

## Backend
Feltételezem, hogy az npm, és a nodejs telepítve van, így a repó leklónozása utána elegendő egy `npm install`, ettől függetlenül lentebb leírtam a telepített npm packageket.

`npm install express@4.15.2`
Az Express.js célja a webes alkalmazások, akár oldalak, akár REST szolgáltatások, akár hibrid alkalmazások készítésének megkönnyítése.

`npm install nodemon`
A nodemon egy olyan eszköz, amely segít a node.js alapú alkalmazások fejlesztésében azáltal, hogy automatikusan újraindítja az alkalmazást, 
ha a rendszer fájlváltozásokat észlel a könyvtárban. (Hasonlóan az Angular CLI-hoz, habár ott ez magától megy)

`npm install socket.io`
A Socket.IO egy JavaScript-könyvtár valós idejű webalkalmazásokhoz. Valós idejű, kétirányú kommunikációt tesz lehetővé webes kliensek és szerverek között. 
Két részből áll: egy kliensoldali könyvtárból, amely a böngészőben fut, és egy szerveroldali könyvtárból a Node.js számára. Mindkét komponensnek közel azonos API-ja van. Ezt a real-time chat elkészítéséhez használtam.

**Futtatás:** `npm run start`
A szerver a 3000-es porton figyel, amennyiben ez foglalt, úgy a chatApp\backend\server.js-ben lehet átírni.

## Frontend
Hasonlóan a fentebb leírtakhoz, itt is elegendő egy `npm install`, hiszen a függőségek a package.json-ben megtalálhatóak.

`npm install socket.io-client`
Az angular könyvtárába telepítjük a socket.io-t, annak érdekében, hogy tudjon kommunikálni a szerverrel.

`npm install cors`
A szokásos cors hiba elkerülésére kínál egyszerű megoldást, amennyiben nem kezeltük le azt a http headers-ben.

`npm install crypto-js`
Titkosítsára használt JS alapú könyvtár, ennek a segítségével tudtam használni az AES256-t, amire *CryptoJS.AES.encrypt* hivatkozunk, és mint a dokumentációból kiderült, a kulcs 
mérete dönti el, hogy 128, 192, vagy 256-os, ez esetben 32 bytos kulcsméretet kell beálíltani ahhoz, hogy AES256 legyen a titkosítás, továbbá ugyan itt kell konfigurálni a modot
 (CFB), illetve a paddingot (NoPadding)

**Futtatás:** `npm run start`
A szerver a szokásos 4200-as porton figyel.

## Használat
A szerver, és az angular terminálban való futtatása mellett, én két külön tabot nyitottam a böngészőben (Chrome), és bármelyik ablakból üzenetet küldve (a chat
 inbox.somponent.ts-ben) a *sendMessage()* funciton hívódik meg, amely a saját ablkabna lévő üzenetet megjeleníti, miközben az üzenetet titkosítja, és úgy emitálja az "üzenő
falra". 

## Nutshell
Úgy gondolom, hogy a feladat egyáltalán nem volt bonyolult, ettől függeltenül sajnos nem sikerült a végére érnem, ennek főképpen az időhiány az egyik fő oka, illetve rossz úton
indultam el (crypto területen nincs tapasztalatom, MÉG!), amit sajnos már későn vettem észre (például már biztosan nem a CryptoJs könyvtárát használnám)! Azonban sok újdonsággal
sikerült megismerkednem, és ugyan egyetemen is tanultuk az integritásvédelmet, de itt legalább közelebb kerültem a megvósításához, továbbá újabb error került a kedvenceim közé:
*Malformed UTF-8 data*! Halkan szeretném megjegyezni, hogy számomra fontos a clenCode, és SOLID elvek betartása, illetve a minőségi kód, és reszponzív design elkészítése,
azonban erre itt most nem figyeltem!
