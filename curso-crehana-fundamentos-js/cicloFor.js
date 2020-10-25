//Sintaxis:
// for(variable inicio; longitud o condición; incremento){
// 	Código que queremos que se repita
// }

// Ponemos "i" de "inicio", pero puede ir cualquier cosa, puede decir var texto = algo.
// for(var i = 1; i <= 10; ++i){

// 	console.log(i);

// }

//var i = 1: le queremos decir que inicie en 1, arranca a contar desde ahí.
// i <= 10: le decimos que se ejecute siempre y cuando i sea menor o igual a 10.
// ++i: le decimos que a medida que se ejecute sume 1.

//PARA RECORRER ARREGLOS:

// var semana = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];

// for(var i = 0; i < semana.length; i++){

// 	console.log(semana[i]);

// }

// CICLO FOR IN:

// var semana = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];

// //Le digo "por cada elemento en semana, me vas a ejecutar el código"
// for(elemento in semana){

// console.log(semana[elemento]);

// }

//Eso va a ser lo mismo que en el ejemplo anterior.