
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