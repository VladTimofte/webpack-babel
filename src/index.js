import './index.css'
import './ball.js'
import './bricks.js'
import './canvas.js'
import './index.html'
import './lives.js'
import './paddle.js'
import './score.js'

var dx = 2;
var dy = -2;
var rightPressed = false;
var leftPressed = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false);

function keyDownHandler(e) {
	if(e.key === "Right" || e.key === "ArrowRight") {
		rightPressed = true;
	}
	else if(e.key === "Left" || e.key === "ArrowLeft") {
		leftPressed = true;
	}
}

function keyUpHandler(e) {
	if(e.key === "Right" || e.key === "ArrowRight") {
		rightPressed = false;
	}
	else if(e.key === "Left" || e.key === "ArrowLeft") {
		leftPressed = false;
	}
}

function mouseMoveHandler(e) {
	var relativeX = e.clientX - canvas.offsetLeft;
	if(relativeX > 0 && relativeX < canvas.width) {
		paddleX = relativeX - paddleWidth/2;
	}
}
function collisionDetection() {
	for(var c=0; c<brickColumnCount; c++) {
		for(var r=0; r<brickRowCount; r++) {
			var b = bricks[c][r];
			if(b.status === 1) {
				if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight) {
					dy = -dy;
					b.status = 0;
					score++;
					if(score === brickRowCount*brickColumnCount) {
						console.log("YOU WIN, CONGRATS!");
						document.location.reload();
					}
				}
			}
		}
	}
};
	
	drawBricks();
	drawBall();
	drawPaddle();
	drawScore();
	drawLives();
	collisionDetection();

	updateBallPosition();
	updatePaddlePosition();
	
	requestAnimationFrame(draw);

draw();