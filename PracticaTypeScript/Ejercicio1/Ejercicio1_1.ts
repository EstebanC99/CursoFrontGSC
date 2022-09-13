/*
 El error se debe a que pi es de tipo string y la operacion de multiplicacion no puede hacerse 
entre un String y un Number
Se corrige cambiando pi al tipo esperado, puede hacerse con el operador '+' previo a 'pi' (+pi)
o con la forma explícita de conversión de tipos (opte esta por buenas prácticas).
*/

let pi = '3.14159';
let tau = Number(pi) * 2;
let tau2 = +pi * 2;

console.log('[Ejercicio 1.1]', `${tau} es ${pi} veces el dos.`);
console.log('[Ejercicio 1.1]', `${tau2} es ${pi} veces el dos.`);