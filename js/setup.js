// var container=document.getElementById("container");
var canvas, context;
var maxWidth, maxHeight;
var time= new Date().getTime();


// init: inicializar canvas
// container, permite tener muchs canvas en elementos mas ordenados, mas general usar en body
function init (){
	maxWidth= window.innerWidth();
	maxHeight= window.innerHeight();
	canvas= document.createElement("canvas");
	context= canvas.getContext("2d");
	// container.appendChild(canvas);
	document.body.appendChild(canvas);

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