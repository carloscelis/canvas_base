var canvas, context;
var maxWidth, maxHeight;
var time= new Date().getTime();
// definición de objeto
// como crear un objeto, se comenta por que la clase function hace la misma función
// var particle= { 
// 	x: Math.random() * window.innerWidth,
// 	y: Math.random() * window.innerHeight,
// 	radius: (Math.random() * 10) + 3
// };

// array para agrupar todas las particulas requeridas y no poner una por una, aqui entran todas las particulas hechas
var particles = [];
// cuantas particulas se quiere
var particleCounter = 300;
// Variante de pi, medida de partícula
var PI2= Math.PI*2;

// init: inicializar canvas
function init (){
	canvas= document.createElement("canvas");
	context= canvas.getContext("2d");
	// se manda a llamar canvas desde el body
	document.body.appendChild(canvas);
	// manda a llamar las partículas;
	setParticles();
	// manda a llamar el resize de la página
	Setsize();
	// resize de pantalla
	window.addEventListener("resize",Setsize);
}
// inicia las particulas
function setParticles(){
	// creación de las particulas, para que respete las 300
	for (var i = 0; i < particleCounter; i++) {
		// una nueva particula tiene el valor de la clase  Particle
		var particle = new Particle ();
		// Push inyecta el valor dentro del arreglo
		particles.push(particle);
	}
}
// funcion para cambiar cuando se ajusta la pantalla
function Setsize(){
	// delimitar el interior de pantalla
	maxWidth= window.innerWidth;
	maxHeight= window.innerHeight;
	// el ancho y alto se delimita al max medida de arriba
	canvas.width=maxWidth;
	canvas.height=maxHeight;
}
// animate: funcion que se manda a llamar y a los metodos de dibujo (60vecesxseg)
function animate(){
	// manda a llamarse a si mismo para reproducirse
	requestAnimationFrame(animate);
	time= new Date().getTime();
	render();
}
// clases empiezan como una función dentro de una variable (Nombre de clases empieza con mayúsculas)
// usar args para no poner todos las propiedades y llamarlas mas facilmente
var Particle = function (args){
	// si los valores no estan definidos(===mismo tipo y valor) los argumentos estan vacios
	if (args === undefined) args = {};
	// llamar las propiedades por medio de "." dentro de args
	// x equivale a x dentro de args
	// posición random dentro de la pantalla
	this.x = args.x || (Math.random() * window.innerWidth);
	this.y = args.y || (Math.random() * window.innerHeight);
	this.radius = args.radius || (Math.random() * 3);
	return this;

}
// carga las animaciones, dibuja los metodos
function render(){
	// se leen los atributos del objeto por medio de "."
	context.clearRect(0, 0, maxWidth, maxHeight);
	// recorrer todas la longitud de las partículas, las 300
	for (var i = 0; i < particles.length; i++) {
	// particula es igual a todo el conjunto de particulas
		var particle = particles [i];
		context.beginPath();
		context.arc(particle.x, particle.y, particle.radius, PI2, false);
		context.fill();
		context.closePath();
	}
}

init();
animate();