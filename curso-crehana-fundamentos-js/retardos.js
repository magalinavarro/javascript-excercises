//Estructura:
//setTimeout(funcion que quiero que ejecute, tiempo en milisegundos que quiero que transcurran antes de ejecutar la funcion);

var texto = 'Hola mundo';

setTimeout(saludar, 5000);

function saludar(){
	console.log(texto);
}