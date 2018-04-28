// var container=document.getElementById("container");
var canvas, context;
var maxWidth, maxHeight;

// init: inicializar canvas
// container, permite tener muchs canvas en elementos mas ordenados, mas general usar en body
function init (){
	canvas= document.createElement("canvas");
	// container.appendChild(canvas);
	document.body.appendChild(canvas);

}
// animate: funcion que se manda a llamar y a los metodos de dibujo
function animate(){
	// manda a llamarse a si mismo para reproducirse
	requestAnimationName(animate);
	render();

}
// carga las animaciones, dibuja los metodos
function render(){

}

init();
animate();