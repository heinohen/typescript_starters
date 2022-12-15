## 4

### Mielivaltaisen kokonaisluvun haku vektorista A, kun järjestystä ei tiedetä.

 * Jos järjestyksestä ei tiedetä mitään, joudutaan käymään koko joukko alusta loppuun läpi vaikka ihan for-loopilla kunnes kohdataan kyseinen alkio tai haku päättyy löytämättä kyseessä olevaa kokonaislukua. Peräkkäishaku - O(n)

 ### Mielivaltaisen kokonaisluvun haku vektorista A, kun järjestetty ei-vähenevään suuruusjärjestykseen

 * Jos tiedetään, että vektori on järjestetty niin voidaan käyttää puolitushakua. Tällöin etsitään ensin keskikohdasta, jos löydetään niin hyvä, jos ei niin edetään sinne puolelle vektoria jossa toteutuu ehto haettavan luvun ja taulukon keskikohdassa olleen suhteen. Pahimmillaan tätä puolitusta joudutaan tekemään niin monta kertaa että hakuvektori on puristunut yhden mittaiseksi jolloin etsittävä löytyy tai haku päättyy löytämättä kokonaislukua, tällöin pahimman tapauksen aikavaativuus on kertaluokkaa O(log2n)

### Kolmanneksi suurimman alkion etsiminen
* Järjestystä ei tiedetä
* Tehtävä on hyvin määritelty eli n ≥ 3

* Jos n = 3 niin tehdään vertailut alkioden kesken O(1)

* Jos n > 3 niin rakennetaan ja lajitellaan maksimikeko, tällöin O(nlogn), 3:ksi suurin löytyy joko vasemman lapsen oikeasta haarasta tai juuren oikeasta lapsesta joita vertailemalla saadaan oikea ulos

### Vektorin pienimmän alkion etsintä kun A lajiteltu ei-kasvavaan suuruusjärjestykseen

* Alkuehdoista johtuen pienin alkio löytyy aina viimeisestä indeksistä josta sen voi vakioajassa poimia O(1)

### Vektorin lajittelu ei-vähenevään suuruusjärjestykseen kun arvoista ja järjestyksestä ei tiedetä mitään

* Oletetaan että muistia on käytössä tarpeeksi

* Käytetään limityslajittelua jonka suoritusaika on parhaassa ja _pahimmassa_ tapauksessa sama O(nlogn). 

* Jos käytettäisiin pikalajittelua ja alkiot sattuisivatkin olemaan jo järjestyksessä joutuisimme kertaluokkaan O(n^2) joka on varsin epätoivottavaa