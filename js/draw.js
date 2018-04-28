// var container=document.getElementById("container");
var canvas, context;
var maxWidth, maxHeight;
var time= new Date().getTime();


// init: inicializar canvas
function init (){
	canvas= document.createElement("canvas");
	context= canvas.getContext("2d");
	// container, permite tener muchos canvas en elementos mas ordenados, mas general usar en body
	// container.appendChild(canvas);
	// se manda a llamar canvas desde el body
	document.body.appendChild(canvas);
	Setsize();
	// resize de pantalla
	window.addEventListener("resize",Setsize);
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
// carga las animaciones, metodos de dibujo
function render(){
	// limpiar pantalla
	context.clearRect(0, 0, maxWidth, maxHeight);
	// context.fillRect(x,y,width,height);
	context.fillStyle= "red";
	context.fillRect(0, 0, 394, 522);

	// indica donde empieza el trazo
	context.beginPath();
	// puntos hacia donde se dirije
	context.moveTo(maxWidth/2, maxHeight/2);
	context.lineTo(10,512);
	context.lineTo(10,12);
	context.lineTo(384,10);
	context.lineTo(maxWidth/2, maxHeight/2);
	context.strokeStyle="blue";
	context.stroke();
	// cerrar la línea
	context.closePath();
	// circulo
	// iniciar linea
	context.beginPath();
	// false es contra manecillas del reloj
	context.arc(197, 256, 184, Math.PI*2, false);
	context.strokeStyle= "green";
	context.stroke();
}

init();
animate();