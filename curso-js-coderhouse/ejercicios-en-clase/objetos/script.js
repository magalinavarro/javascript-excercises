// var ch = new Object();
// 	ch.modalidadOnline = true;
// 	ch.nombre = 'Coderhouse';
// 	ch.categoria = 'Escuela digital';
// 	ch.anioCreacion = 2015;
// 	ch.carreras = 'Programador JS';

var carrerasOfrecidas = ['Desarrollo web', 'Programador JS', 'Marketing digital', 'React', 'Angular'];

function instituto(nombre, categoria, anioCreacion, carreras) {
	this.modalidadOnline = true;
	this.nombre = 'Coderhouse';
	this.categoria = 'Escuela digital';
	this.anioCreacion = 2015;
	this.carreras = carrerasOfrecidas;

	this.presentacion = function() {
		mensaje = 'Bienvenidos a ' + this.nombre + '. Somos una ' + this.categoria + ' nacida en ' + this.anioCreacion + '.';
		alert(mensaje);
	}

	this.getCarreras = function() {
		let listado = '';
		for (var i = 0; i < this.carreras.length; i++) {
			listado += this.carreras[i] + '\n';
		}
		console.info(listado);
	}
}

var inst = new instituto(true, 'Coderhouse', 'Escuela digital', 2015, carrerasOfrecidas);