/* 1. Parašyti funkciją, kuri priima du skaičius. Grąžina tų skaičių sumą.
*/
console.log('1. -----------');

function dviejuSuma(num1, num2) {
    return num1 + num2;
}
console.log(dviejuSuma(12, 12));

/* 2. Parašyti funkciją, kuri priima du kintamuosius.
Palygina tuos du skaičius ir grąžina rezultatą ar pirmas skaičius yra didesnis, ar antras, ar jie yra lygūs.
*/

console.log('2. -----------');

function skaiciuPalyginimas(num1, num2) {
    if (num1 > num2) {
        return `${num1} daugiau uz ${num2}`;
    } else if (num1 < num2) {
        return `${num1} maziau uz ${num2}`;
    } else {
        return `${num1} lygus ${num2}`;
    }
}

console.log(skaiciuPalyginimas(12, 12));

/* 3. Parašyti funkciją, kuri priimtų vieną skaičių. Turi būti grąžinamas rezultatas ar tie metai yra keliemieji.
*/

console.log('3. -----------');

function keliamujuMetuPatikra(duotiejiMetai) {
    if ((duotiejiMetai % 4 === 0 && duotiejiMetai % 100 !== 0) || duotiejiMetai % 400 === 0) {
        return `${duotiejiMetai} yra keliamieji`;
    }   else {
        return `${duotiejiMetai} nera keliamieji`;
    }
}

console.log(keliamujuMetuPatikra(1700));

/*4. Parašyti funkciją, kuri priimtų vieną skaičių. Grąžinti skaičiaus kvadratą.
*/

console.log('4. -----------');

function skaiciausKvadratas(num) {
    return Math.pow(num, 2);
}

console.log(skaiciausKvadratas(12));

/*5. Parašyti funkciją, kuri priimtų vieną skaičių, kuris turi būti didesnis už vienetą. 
Funkcija turi grąžinti visų skaičių sumą, nuo 1 iki įvesto skaičiaus.
*/

console.log('5. -----------');

function skaiciuSuma(num) {
    let suma = 0;
    for (let i = 1; i <= num; i++) {
        suma += i;
    } 
    return suma; 
}

console.log(skaiciuSuma(6));

/*6. Parašykite funkciją, kuri priimtų skaičių ir suskaičiuotų, iš kiek sveikų skaičių jos argumentas dalijasi be liekanos 
(išskyrus vienetą ir patį save).
*/

console.log('6. -----------');



/*7. Parašyti funkciją, kuri priimtų vieną kintamąjį-tekstą. 
Funkcija turi išvesti tekstą į ekraną ir dar papildomai parodyti jo ilgį(simbolių kiekį).
*/

console.log('7. -----------');

/*8. Parašyti funkcijątelefonoNumeris, kuri priima vieną kintamąjį–masyvą su 10 skaičių jame.
Funkcija turi grąžinti telefono numerį tokiu formatu -"(XXX) XXX-XXXX".
*/

console.log('8. -----------');

/*9. Parašyti funkciją, kuri priimtų du kintamuosius-tekstus.Palyginti kuris tekstas yra ilgesnis.
*/

console.log('9. -----------');

/*10. Parašyti funkciją, kuri priimtų vieną kintamąjį-tekstą.Suskaičiuoti, kiek tekste yra ‚a‘ raidžių.
*/

console.log('10. -----------');

