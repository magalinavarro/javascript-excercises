/*

# Ejercicio 27

* Crear un documento con el nombre ej27.js
* Declarar 2 variables con los nombres **numero1** y **numero2**
* Asignarle a cada variable un valor del tipo **number**

* Para cada operación mostrar el mensaje de la siguiente forma:
  * Ejemplos: `sumo 2 + 3 y el resultado es 5` (donde 2 y 3 son los valores de las variables
  * y 5 es el resultado de la operación)
  * Mostrar en consola el resultado de la suma de las dos variables
  * Mostrar en consola el resultado de la resta de las dos variables
  * Mostrar en consola el resultado de la multiplicación de las dos variables
  * Mostrar en consola el resultado de la división de las dos variables
  * Mostrar en consola el resultado del resto de las dos variables

*/

let numero1 = 4;
let numero2 = 2;

console.log(`Sumo ${numero1} + ${numero2} y el resultado es ${(numero1 + numero2)}.`);
console.log(`Resto ${numero1} - ${numero2} y el resultado es ${(numero1 - numero2)}.`);
console.log(`Multiplico ${numero1} x ${numero2} y el resultado es ${(numero1 * numero2)}.`);
console.log(`Divido ${numero1} / ${numero2} y el resultado es ${(numero1 / numero2)}.`);
console.log(`El resto entre ${numero1} y ${numero2} da como resultado ${(numero1 % numero2)}.`);