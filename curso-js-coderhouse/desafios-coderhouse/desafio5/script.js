//Bienvenida a la página

let nombre = prompt("¿Cuál es tu nombre? ");

alert("¡Hola, " + nombre + ", te ayudamos a cotizar tu próximo viaje!");

console.log(nombre);

//Muestra por consola el título de la app:

let cambiarTitulo = document.getElementById("titulo-app");
console.log( cambiarTitulo.innerHTML );

//Se crea un elemento nuevo a partir de lo ingresado en el input del prompt:

let nuevoParrafo = document.createElement("p");

//Se agrega el nombre del usuarix a un elemento <p> y al body del HTML:

let insertarContenido = document.createTextNode(nombre);

nuevoParrafo.appendChild(insertarContenido);

document.body.appendChild(nuevoParrafo);