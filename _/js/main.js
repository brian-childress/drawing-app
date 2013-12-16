var canvas = document.getElementById('drwCanvas');
var context = canvas.getContext('2d');

var radius = 10;
var mouseDrag = false;

/*
window.onresize = function() {
	var img = context.getImageData(0,0,canvas.width, canvas.height);
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	context.putImageData(img,0,0);
}
*/

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//Using canvas resize spec to clear context
/*
var clearButton = document.getElementById('clearImage');

clearButton.addEventListener('click', clearCanvas);

function clearCanvas (canvas) {
	canvas.width = canvas.width;
}
*/
context.lineWidth = radius*2;

var putpoint = function (e){
	if (mouseDrag){
	context.lineTo(e.clientX, e.clientY);
	context.stroke();
	context.beginPath();
	context.arc(e.clientX, e.clientY, radius, 0, Math.PI*2 );
	//context.arc(e.offsetX, e.offsetY, radius, 0, Math.PI*2 ); not supported in FF
	context.fill();
	context.beginPath();
	context.moveTo(e.clientX, e.clientY);
	}	
}

var engage= function(e){
	mouseDrag = true;
	putpoint(e);
}

var disengage = function (){
	mouseDrag = false;
	context.beginPath();
}

canvas.addEventListener('mousedown', engage);
canvas.addEventListener('mousemove', putpoint);
canvas.addEventListener('mouseup', disengage);
