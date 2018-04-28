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
	context.fillRect(0, 0, 100, 100);

	// indica donde empieza el trazo
	context.beginPath();
	// puntos hacia donde se dirije
	context.moveTo(maxWidth/2, maxHeight/2);
	context.lineTo(400,500);
	context.lineTo(300,550);
	context.lineTo(500,100);
	context.lineTo(maxWidth/2, maxHeight/2);
	context.strokeStyle="blue";
	context.stroke();
	// cerrar la línea
	context.closePath();
	// circulo
	// iniciar linea
	context.beginPath();
	// false es contra manecillas del reloj
	context.arc(300, 300, 10, Math.PI*2, false);
	context.strokeStyle= "green";
	context.stroke();
}

init();
animate();