// 1.Generuoti atsitiktinius skaičius nuo 1 iki 10 tol, kol skaičių suma bus mažesnė už 100.

console.log('1. -----------');

function rand (min, max) {
    return Math.floor(Math.random () * (max - min + 1) + min);  
}

let skaiciuSuma = 0;
while (skaiciuSuma < 100) {
    const randomas = rand(1, 10);
    console.log(randomas, skaiciuSuma);
    skaiciuSuma += randomas;
    if (skaiciuSuma > 100) {
        skaiciuSuma -= randomas;
        break;
    }
}
console.log(skaiciuSuma);

// 2.Generuoti atsitiktinius skaičius nuo 1 iki 10tol, kol sugeneruotų skaičių suma bus dali iš 7.

console.log('2. -----------');

let numSum = 1;
while (numSum % 7 !== 0) {
    const randomNums = rand(1, 10);
    numSum += randomNums;
    console.log(randomNums, numSum);
}


/* 3.Tadas mėgsta skaityti knygas, tačiau jam labai sunku pradėti skaityti. 
Knygoje yra m skyrių. Pirmą dieną Tadas perskaitė 1 skyrių, antrą –2, trečią –3 ir t.t. 
Kiekvieną kitą dieną jis perskaito vienu skyriumi daugiau, negu prieš tai buvusią dieną. 
=====> Programa turi apskaičiuoti, per kelias dienas d Tadas perskaitys visą knygą ir kelis skyrius s vidutiniškai per dieną perskaito Tadas. 
Paskutinei dienai gali likti mažiau skyrių.
Kontroliniai duomenys:

Įveskite knygos skyrių skaičių: 8
Tadas visą knygą perskaitys per 4 dienas (-ų).
Tadas vidutiniškai per dieną perskaitė 2 skyrius(-ų).

Įveskite knygos skyrių skaičių: 17
Tadas visą knygą perskaitys per 6 dienas (-ų).
Tadas vidutiniškai per dieną perskaitė 2.83 skyrius (-ų).
*/

console.log('3. -----------');





/* 4.Naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). 
Paskutinis atspausdintas skaičius turi būti 5.
*/

console.log('4. -----------');


/* 5.naudojant ciklą atspausdinti skirtingus atsitiktinius skaičius nuo 0 iki 10 (vienas skaičius vienoje eilutėje). 
Paskutinis atspausdintas skaičius turi būti 5 arba 7; Suskaičiuoti kiek ciklų prasisuko.
*/

console.log('5. -----------');