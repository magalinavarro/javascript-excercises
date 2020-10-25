//PROGRAMACIÓN ORIENTADA A OBJETOS O POO:

//Es una serie de normas de realizar las cosas
//de manera que otras personas puedan utilizarlas
//y adelantar su trabajo, de manera que consigamos
//que el código se pueda reutilizar.


//CLASES
//Son funciones llamadas "funciones constructoras" y se escriben iniciando con mayúsculas.

//CLASES DE JAVASCRIPT:

// var texto = new String('Hola, soy un texto');

// var numero = new Number(5);

// var boleano = new Boolean(true);

// var arreglos = new array('Alejandro', 'María', 'Pedro');

// var objeto = new Object({color: 'verde', tamaño: 'grande'});

//CLASES PERSONALIZADAS:

// function Persona(nombre, edad){

// 	this.nombre = nombre;
// 	this.edad = edad;

// }

// var persona1 = new Persona('Pedro', 16);

// console.log(persona1);

// ________________________


// function Persona(){

// 	this.nombre;
// 	this.edad;

// }

// var persona1 = new Persona();
// persona1.nombre = 'Alejandro';
// persona1.edad = 18;

// console.log(persona1);

// var persona2 = new Persona();
// persona2.nombre = 'Juan';
// persona2.edad = 30;

// console.log(persona2);

// ________________________

// function Planta(color, tamaño){

// 	this.color = color;
// 	this.tamaño = tamaño;

// }

//OBJETOS

// var planta1 = new Planta('azul', 'mediano');



// __________________________

var planta = {
	
	color: 'verde',
	tamaño: 'grande',
	escribeInformacion: function(precio){
		console.log('El color de la planta es ' + planta.color + ' y su tamaño es ' + planta.tamaño + ', y su precio es ' + precio);
	}

}

// console.log(planta.color);
// console.log(planta.tamaño);
planta.escribeInformacion('$1500');

