var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;


function clearCanvas() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function draw() {
	clearCanvas();}