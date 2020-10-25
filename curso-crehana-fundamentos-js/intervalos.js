// setInterval(funcion que queremos que ejecute, tiempo en milisegundos);

var segundero = 0; // Quiero que inicie en cero.

/******************/ // FUNCIÓN SIMPLIFICADA Y ANÓNIMA:

// setInterval(function(){

// 	++segundero;
// 	console.log(segundero);

// }, 1000);

/********************/ // FUNCIÓN TRADICIONAL, DEBO PONER "CONTAR" DENTRO DEL PARÉNTESIS DEL setInterval:

// function contar(){

// 	++segundero; // Quiero que la incremente en 1.
// 	console.log(segundero);

// }