//Bienvenida a la página

let nombre = prompt("¿Cuál es tu nombre? ");

alert("¡Hola, " + nombre + ", te ayudamos a cotizar tu próximo viaje!");

console.log(nombre); 


//Para que el usuario establezca el destino a visitar

function listaDestinos() { 

let destinos;

let turismoInterno = ['Jujuy', 'Salta', 'Tucumán', 'Mendoza', 'Córdoba'];

let turismoInternacional = ['España', 'Italia', 'Portugal', 'Reino Unido'];

destinos = turismoInterno.concat(turismoInternacional);

console.log(destinos);

};

listaDestinos();


//Para que elija qué agregar al paquete turístico

function listaAdicionales() { 

let adicionales;

let comidas = ['Desayuno', 'Almuerzo', 'Cena'];

let excursiones = ['Trekking', 'Teleférico', 'Walking tour'];

adicionales = comidas.concat(excursiones);

console.log(adicionales);

};

listaAdicionales();


//Objetos (en este caso, destinos a elegir)

let madrid = new Object();

madrid.pais = "España";
madrid.continente = "Europa";
madrid.temporadaAlta = "Julio";
madrid.temporadaBaja = "Enero";


let londres = new Object();

londres.pais = "Reino Unido";
londres.continente = "Europa";
londres.temporadaAlta = "Julio";
londres.temporadaBaja = "Enero";


let roma = new Object();

roma.pais = "Italia";
roma.continente = "Europa";
roma.temporadaAlta = "Julio";
roma.temporadaBaja = "Enero";


let jujuy = new Object();

jujuy.pais = "Argentina";
jujuy.continente = "Sudamérica";
jujuy.temporadaAlta = "Enero";
jujuy.temporadaBaja = "Julio";


let cusco = new Object();

cusco.pais = "Perú";
cusco.continente = "Sudamérica";
cusco.temporadaAlta = "Enero";
cusco.temporadaBaja = "Julio";


//Muestra por consola el título de la app:

let cambiarTitulo = document.getElementById("titulo-app");
console.log( cambiarTitulo.innerHTML );


//Se crea un elemento nuevo a partir de lo ingresado en el input del prompt:

let nuevoParrafo = document.createElement("p");


//Se agrega el nombre del usuarix a un elemento <p> y al body del HTML:

// let insertarContenido = document.createTextNode(nombre);

// nuevoParrafo.appendChild(insertarContenido);

// document.body.appendChild(nuevoParrafo);

//_____________________________________________________


//jQuery - Al querer incorporarlo en este archivo, da error porque no reconoce los caracteres.
//Quiero que, al apretar enter, muestre un alert con el siguiente mensaje:

// $(document).on('keypress',function(e) {
//     if(e.which == 13) {
//         alert('📧 Te enviamos un mail con la cotización. ¡Gracias por elegirnos! 😃');
//     };
// });

//En lugar de poner jQuery en este archivo, lo puse en index.html



