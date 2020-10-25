let numeroOculto = 7;

let numeroPorAdivinar = prompt("Adiviná el número oculto (ingresá uno del 1 al 10)");

if (numeroPorAdivinar < numeroOculto) {
	alert("Es más alto, recargá la web y volvé a intentarlo");
} else if
	(numeroPorAdivinar > numeroOculto) {
	alert("Es más chico, recargá la web y volvé a intentarlo");
} else {
	alert("¡Adivinaste!");
};