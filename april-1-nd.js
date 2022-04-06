// 1. Naudojant ciklą atspausdinti penkias eilutes ‘Labas’.
console.log('1. ----------');

for (let i = 0; i < 5; i++) {
    console.log('Labas');
}



// 2. Naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 1 2 3 4 (vienas skaičius vienoje eilutėje).

console.log('2. ----------');

for (let i = 0; i < 5; i++) {
    console.log(i);
}


// 3. Naudojant ciklą penkiose eilutėse atspausdinti skaičius 0 10 20 30 40 (vienas skaičius vienoje eilutėje).

console.log('3.1 ----------');

for (let i = 0; i <= 40; i += 10) {
    console.log(i);
}

console.log('3.2 ----------');

for (let i = 0; i < 5; i++) {
    console.log(i * 10);
}

    // 3.3 skaicius 5 15 25 35 45

console.log('3.3 ----------');

const offset = 5;

for (let i = 0; i < 5; i++) {
    console.log(i * 10 + offset);
}
    // 3.4 skaicius 5 8 11 14 17

console.log('3.4 ----------');

const offset1 = 3;
const startNumber = 5;

for (let i = 0; i < 5; i++) {
    console.log(startNumber + offset1 * i);
}

// 4. Naudojant ciklą penkiose eilutėse atspausdinti skaičius 49 50 51 52 53 (vienas skaičius vienoje eilutėje).

console.log('4 ----------');

for (let i = 49; i < 54; i++) {
    console.log(i);
}

// 5. Naudojant ciklą penkiose eilutėse atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje).

console.log('5. ----------');

function rand (min, max) {
    return Math.floor(Math.random () * (max - min + 1) + min);  
}

for(let i = 0; i < 5; i++){
    console.log(rand(1, 10))
}

// 6. Naudojant ciklą, atspausdinti skaičius nuo 1 iki 20. Nespausdinti skaičių, kurie dalinasi iš 3.

// Jei praleistu reiksmes, kurios is 3 dalijasi be liekanos:

console.log('6. ----------');

for (let i = 0; i <= 20; i++) {
    if (i % 3 === 0) continue;
    console.log(i);
}

// 6.1 Jei israsytu visus skaicius, kurie nesidalina is 3:

console.log('6.1 ----------');

for (let i = 0; i <= 20; i++) {
    if (i % 3 !== 0){
        console.log(i);
    } 
}

// 7. Parašykite programą, kuri atspausdintų įvesto skaičiaus daugybos lentelę nuo 1 iki 10.

console.log('7. ----------'); 

const num = 5;
for (let i = 1; i <= 10; i++) {
    console.log(`${num} * ${i}`);
}

// 8. Vienas colis yra 2,54 cm. Sudarykite programą kuri pateiktų ekrane lentelę nuo 1 iki n colius centimetrais.

console.log('8. ----------');

const daugiklisCm = 2.54;
const coliai = 5;

for (let i = 1; i < coliai; i++) {
    console.log(`${i} in = ${i*daugiklisCm} cm`);
}

/* 9. Bankas moka 2% metinių palūkanų. 
    Indėlininkas pasidėjo į banką 100e.
    Sudarykite kasmetinę banko atskaitą klientui iki n metų. Ataskaitoje pateikite: metus, palūkanas, indėlį.
*/

console.log('9. ----------');

// Kai palukanos paprastosios:

const metinesPalukanos = 0.02;
const pradinisIndelis = 100;
const indelioTerminas = 5;

for (let i = 0; i < indelioTerminas; i++) {
    let sukauptosPalukanos = (pradinisIndelis * metinesPalukanos) * (i + 1);
    console.log(`${i} metais sukaupta ${sukauptosPalukanos}e palukanu, is viso saskaitoje ${pradinisIndelis + sukauptosPalukanos}e`);
}

console.log('9.1 ----------');

// Kai palukamos sudetines:

for (let i = 0; i < indelioTerminas; i++) {
    let indelisMetuGale = pradinisIndelis * Math.pow((1 + metinesPalukanos), (i+1));
    let sukauptosPalukanos = indelisMetuGale - pradinisIndelis;
    console.log(`${i} metais sukaupta ${sukauptosPalukanos.toFixed(2)}e palukanu, is viso saskaitoje ${indelisMetuGale.toFixed(2)}e`);
}

/* 10. Keliamieji metai turi 366 dienas, paprastieji–365. 
Visi metai, išskyrus šimtmečius, yra keliamieji, jie dalūs iš 4. 
Šimtmečių metai yra keliamieji, jeigu dalūs 400. Pvz.: 1600 metai yra keliamieji, nes dalūs iš 400, o 1700 –paprastieji. 
Raskite visus mūsų eros keliamuosius metus.
*/

console.log('10. ----------');

for (let i = 0; i < 2022; i++) {
    if ((i % 4 === 0 && i % 100 !== 0) || i % 400 === 0) {
        console.log(i); 
    }
}

