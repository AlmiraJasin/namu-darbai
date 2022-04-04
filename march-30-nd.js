/* 1 uzduotis
    Žinomas skaičius n. Parašykite programą, kuri nustatytų ar skaičius yra blogas ar geras? 
    Neigiamas –„Blogas“, teigiamas „Geras“. 
    Pasitikrinkite: Kai n = 20, turėtume gauti: Skaičius geras.
    ** Salygos papildymas: "įvedus 0 turėtų grąžinti tekstą, kad tai yra 0 arba nieko nedaryti"
*/

console.log('-----------');
console.log('1 uzduotis');

const n1 = 20

if (n1 < 0) {
    console.log('Skaicius blogas');
} else if (n1 > 0) {
    console.log('Skaicius geras');
}

/* 2 uzduotis
    Mokinys eina gatve ir prieina sankryžą reguliuojamą šviesoforu. 
    Sudarykite programą, kuri nustatytu, kaip turi pasielgti mokinys? 
    Žinome šviesoforo spalvos kodą n, 1-žalia, 2-geltona, 3-raudona. 
    Pasitikrinkite: Kai n= 2, turėtume gauti: Palaukite.
*/

console.log('-----------');
console.log('2 uzduotis');

const zalia = 1;
const geltona = 2;
const raudona = 3;
const n2 = 2

if (n2 === zalia) {
    console.log('Pereikite gatve');
} else if (n2 === geltona) {
    console.log('Palaukite');
} else if (n2 === raudona) {
    console.log('Eiti draudziama');
}  

/* 3 uzduotis
   Gintautas planuoja persikraustyti į naujus namus ir jam reikia sudėti visas turimas knygas į dėžes. 
   Gintautas turi d dėžių ir k knygų. 
   Parašykite programą, kuri apskaičiuotų, ar Gintauto turimos knygos tilps į dėžes, jei į vieną dėžę telpa po n knygų. 
   Pasitikrinkite: 
   Kai d=2, k=8, n=5 tuomet ekrane turi būti rodomas pranešimas: Knygos telpa į dėžes; 
   kai d=3, k=18, n=5 tuomet ekrane turi būti rodomas pranešimas: Knygos netelpa į dėžes.
*/

console.log('-----------');
console.log('3 uzduotis');

const dezes = 3;
const knygos = 18;
const dezesTalpa = 5;
const bendraTalpa = dezes * dezesTalpa

if (bendraTalpa >= knygos) {
    console.log('Knygos telpa į dėžes');
} else {
    console.log('Knygos netelpa į dėžes');
}

/* 4 uzduotis
    Duoti du sveikieji skaičiai a ir b. 
    Parašykite programą, kuri didesnį skaičių pamažintu vienetu, o mažesnį padidintu vienetu.   
*/

console.log('-----------');
console.log('4 uzduotis');

let a = 10;
let b = '10';

if (a < b) {
    console.log(++a, --b);
} else if (a > b) {
    console.log(--a, ++b);
} else if (a === b) {
    console.log(`Abu skaiciai vienodi: ${a}, ${b}`)
}

/*  5 uzduotis
    Saulius sutaupė c centų ir už juos nusprendė nusipirkti ledų. 
    Parduotuvėje porcija ledų kainuoja p centų. 
    Parašykite programą, kuri suranda, kiek porcijų ledų k nusipirks Saulius ir kiek centų m dar liks. 
    Pasitikrinkite Kai c=50, p=20, turi būti : Saulius nusipirks 2 porcijas, liks centų 10. 
    Gali prireikti panaudoti Math.floor() funkciją.
*/

console.log('-----------');
console.log('5 uzduotis');

const centai = 50;
const porcijosKaina = 20;
const porcijuKiekis = Math.floor(centai / porcijosKaina);
const piniguLikutis = centai % porcijosKaina;

console.log(`Saulius nusipirks ${porcijuKiekis} porcijas, liks centų ${piniguLikutis}`);

/*  6 uzduotis
    Yra n degtukų. 
    Parašykite programą, kuri nustatytų, ar iš tų degtukų galima sudėti lygiakraštį trikampį. 
    Dėliojamai figūrai turi būti panaudoti visi degtukai. Degtukų laužyti negalima. 
    Pasitikrinkite: jei n = 6, turi būti: Trikampį sudėlioti galima. 
    jei n = 4, turi būti: Trikampį sudėlioti negalima.
*/

console.log('-----------');
console.log('6 uzduotis');

const degtukuKiekis = 2;
const trikampioKrastiniuSkaicius = 3;

// Pirmas budas

if(degtukuKiekis >= trikampioKrastiniuSkaicius) {
    const arGalimaSudetiTrikampi = Number.isInteger(degtukuKiekis / trikampioKrastiniuSkaicius)
    if (arGalimaSudetiTrikampi) {
        console.log('Trikampį sudėlioti galima');
    } else {
        console.log('Trikampį sudėlioti negalima');
    }
} else {
    console.log('Trikampį sudėlioti negalima');
}

// Antras budas 

const arGalimaSudetiTrikampi = Number.isInteger(degtukuKiekis / trikampioKrastiniuSkaicius)

if (degtukuKiekis >= trikampioKrastiniuSkaicius && arGalimaSudetiTrikampi) {
    console.log('Trikampį sudėlioti galima');
} else {
    console.log('Trikampį sudėlioti negalima');
}

/*  7 uzduotis
    Parašykite programą, kuri žinant mėnesio numerį n atspausdintų to mėnesio dienų kiekį d. 
    (tarkime, kad metai yra paprastieji) (pvz. n=5, ats. d=31; n=2 ats. d=28)
*/

console.log('-----------');
console.log('7 uzduotis');

// Pirmas budas

const n3 = 12;

if (n3 === 4 || n3 === 6 || n3 === 9 || n3 === 11) {
    console.log(30);
} else if (n3 === 2) {
    console.log(28);
} else if (n3 > 0 && n3 <= 12) {
    console.log(31);
} else {
    console.log('Tokio menesio nera');
}

// Antras budas

const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

if(n3 > 0 && n3 <= daysInMonth.length){
    console.log(daysInMonth[n3 - 1]);
} else {
    console.log('Tokio menesio nera');
}

/*  8 uzduotis
    Du broliai nesutaria, kuriam tvarkyti kambarį. 
    Jie meta kauliuką. 
    Jei iškrenta skaičius 1, 3 arba 5 –kambarį tvarko jaunėlis, 
    jei 2, 4 arba 6 –vyresnėlis. 
    Parašykite programą, kuri įvedus iškritusį skaičių k, ekrane rodytų pranešimą „Kambarį tvarkys jaunėlis“, 
    arba „Kambarį tvarkys vyresnėlis“.
    Pasitikrinkite: kai k = 1, ekrane turi būti: Kambarį tvarkys jaunėlis. 
    Kai k = 4, ekrane turi būti: Kambarį tvarkys vyresnėlis.
*/

console.log('-----------');
console.log('8 uzduotis');

const isridentasSkaicius = 4;
const maksimalusSkaicius = 6;

if (isridentasSkaicius > 0 && isridentasSkaicius <= maksimalusSkaicius) {
    const lyginisSkaicius = isridentasSkaicius % 2 === 0;
    if (lyginisSkaicius) {
        console.log('Kambarį tvarkys vyresnėlis');
    } else {
        console.log('Kambarį tvarkys jaunėlis');
    } 
} else {
    console.log('Tokia reiksme negalima');
}

/*  9 uzduotis
    Pirmosios olimpinės žaidynės įvyko 1896 metais ir toliau organizuojamos kas ketveri metai. 
    Jei žaidynės neįvyksta, tie metai vis tiek laikomi olimpiniais, o žaidynėms skiriamas eilės numeris. 
    Parašykite programą, kuri surastų m-ųjų metų olimpinių žaidynių numerį n. 
    Jei metai neolimpiniai, turi būti spausdinama „Metai neolimpiniai“. 
    Pasitikrinkite. Kai m = 1904, turi būti spausdinama: n = 3. Kai m = 2005, turi būti spausdinama: Metai neolimpiniai.
*/

console.log('-----------');
console.log('9 uzduotis');

const pradiniaiMetai = 1896;
const tikrinamiMetai = 3004;
const metuSkirtumas = tikrinamiMetai - pradiniaiMetai
const metuIntervalas = 4;

if (metuSkirtumas % metuIntervalas === 0) {
    const olimpiniuNumeris = (metuSkirtumas / metuIntervalas) + 1;
    console.log(olimpiniuNumeris)
} else {
    console.log('Metai neolimpiniai');
}

/*  10 uzduotis
    Petras išėjo iš namų, kai laikrodis rodė v1 valandų ir m1 minučių. 
    Į gimnaziją Petro kelionė trunka m2 minučių. 
    Parašykite programą, kuri ekrane parodytų pranešimą apie tai, ar Petras nepavėluos į pamoką, prasidedančią v valandų ir m minučių. 
    Pasitikrinkite: jei v1 = 8, m1 = 29, m2 = 43, v = 9, m = 5, turi būti: Petras į pamoką pavėluos; 
    jei v1 = 8, m1 = 29, m2 = 23, v = 9, m = 5, turi būti: Petras į pamoką nepavėluos.
*/

console.log('-----------');
console.log('10 uzduotis');

const kelionesLaikas = 23;
const dabarValandu = 8;
const dabarMinuciu = 29;
const pamokosPradziosValanda = 9;
const pamokosPradziosMinutes = 5;

const isejimoLaikas = dabarValandu * 60 + dabarMinuciu;
const pamokosPradziosLaikas = pamokosPradziosValanda * 60 + pamokosPradziosMinutes;

if (pamokosPradziosLaikas - isejimoLaikas >= kelionesLaikas) {
    console.log('Petras į pamoką nepavėluos');
} else {
    console.log('Petras į pamoką pavėluos');
}





