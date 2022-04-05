// 1. Naudojant ciklą atspausdinti penkias eilutes ‘Labas’.

// NESUPRANTU UZDUOTIES

// 2. Naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 1 2 3 4 (vienas skaičius vienoje eilutėje).

const seka1 = [0, 1, 2, 3, 4];
for (let i1 = 0; i1 < seka1.length; i1++) {
    console.log(seka1[i1]);
}

console.log('----------');

// 3. Naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 10 20 30 40 (vienas skaičius vienoje eilutėje).

const seka2 = [0, 10, 20, 30, 40];

seka2.forEach((sekos2Numeris) => {
    console.log(sekos2Numeris);
});

console.log('----------');

// 4. Naudojant ciklą penkiose eilutėse atspausdinti skaičius 49 50 51 52 53 (vienas skaičius vienoje eilutėje).

const seka3 = [49, 50, 51, 52, 53];
let i3 = 0;
while (i3 < seka3.length) {
    const sekos3Numeris = seka3[i3];
    console.log(sekos3Numeris);
    i3++;
}

console.log('----------');

// 5. Naudojant ciklą penkiose eilutėse atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje).

function rand (min, max) {
    Return Math.floor(Math.random () * (max - min + 1) + min);
}

// 6. Naudojant ciklą, atspausdinti skaičius nuo 1 iki 20. Nespausdinti skaičių, kurie dalinasi iš 3.

// 7. Parašykite programą, kuri atspausdintų įvesto skaičiaus daugybos lentelę nuo 1 iki 10.

// 8. Vienas colis yra 2,54 cm. Sudarykite programą kuri pateiktų ekranelentelę nuo 1 iki n colius centimetrais.

/* 9. Bankas moka 2% metinių palūkanų. 
    Indėlininkas pasidėjo į banką 100e.
    Sudarykite kasmetinę banko atskaitą klientui iki n metų. Ataskaitoje pateikite: metus, palūkanas, indėlį.
*/

/* 10. Keliamieji metai turi 366 dienas, paprastieji–365. 
Visi metai, išskyrus šimtmečius, yra keliamieji, jie dalūs iš 4. 
Šimtmečių metai yra keliamieji, jeigu dalūs 400. Pvz.: 1600 metai yra keliamieji, nes dalūs iš 400, o 1700 –paprastieji. 
Raskite visus mūsų eros keliamuosius metus.
*/