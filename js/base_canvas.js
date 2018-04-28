// var container=document.getElementById("container");
var canvas, context;
var maxWidth, maxHeight;
var time= new Date().getTime();


// init: inicializar canvas
// container, permite tener muchs canvas en elementos mas ordenados, mas general usar en body
function init (){
	canvas= document.createElement("canvas");
	context= canvas.getContext("2d");
	// container.appendChild(canvas);
	// se manda a llamar canvas desde el body
	document.body.appendChild(canvas);
	Setsize();
	// resize de pantalla
	window.addEventListener("resize")

}
// funcion para cambiar cuando se ajusta la pantalla
function Setsize(){
	// delimitar el interior de pantalla
	maxWidth= window.innerWidth();
	maxHeight= window.innerHeight();
	// canvas ya tiene el ancho y alto
	canvas.width=maxWidth;
	canvas.height=maxHeight;
}
// animate: funcion que se manda a llamar y a los metodos de dibujo (60vecesxseg)
function animate(){
	// manda a llamarse a si mismo para reproducirse
	requestAnimationName(animate);
	time= new Date().getTime()
	render();

}
// carga las animaciones, dibuja los metodos
function render(){

}

init();
animate();