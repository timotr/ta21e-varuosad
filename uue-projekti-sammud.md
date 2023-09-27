## Uue projekti sammud
1. Teen Git repo
2. Lisan SSH võtmed (per repo või user)
3. git clone projektide kaustas mitte suvalt desktopil
4. Otsin projekti jaoks boilerplate'i/template'i või teen käsitsi metadata failid
5. Installin backendi jaoks vajalikud package'id
6. Dokumenteerin mille jaoks mis package'id valisin
7. Dokumenteerin mis selle projekti mõte on, kelle jaoks jne
8. Valmistan ette dev env käivitamise käsud ja confi failid
9. Dokumenteerin kuidas projekti setup teha ja kuidas käima panna
10. Testin kas hello world tuleb ette.
11. Installin frontend frameworki, testin kas hello world tuleb ette
12. Commitin ja pushin mõlemad projektid, message "Project init"

## Seadistame andmebaasi ühenduse
1. Valin ja installin ORMi library
2. Installin andmebaasi
3. Teen andmebaasi projekti schema ja kasutaja millel on õigused sellele schemale. Valin õige encodingu ja collationi.
4. Kasutades ORMi juhendit loon schema definitsiooni, st kirjeldan millised tabelid andmebaasis on. Valin kausta kus schema faili hoida ja kus andmebaasi ühenduse muutujat hoida.
5. Loon schema põhjal migratsioonifailid, ORMil on selle jaoks olemas CLI käsklus. Valin kausta kus migratsioone hoida.
6. Käivitan migratsioonid, ORMil on selle jaoks olemas CLI käsklus
7. Kontrollin kas andmebaas tekkis, lisan andmebaasi tabelisse mõned kanded, et rakendust testida
8. Kirjutan esimese kontrolleri mis teeb andmebaasis select päringu ning tagastab andmed JSON formaadis. Testin kas kontroller vastab andmetega.
9. Kirjutan dokumentatsiooni:
  - kus schema asub ning mis ORMi me kasutame ja kus selle kohta infot saab
  - kus andmebaasi ühenduse parameetrid saab seadistada
  - kuidas schema muudatustest saab luua migratsioonifaili
  - kuidas migratsioonid käima panna, et andmebaasis muudatus rakenduks
