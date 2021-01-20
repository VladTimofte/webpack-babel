var ballRadius = 10;

function updateBallPosition() {
	if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
		dx = -dx
	}
	if (y + dy < ballRadius) {
		dy = -dy
	} else if (y + dy > canvas.height - ballRadius) {
		if (x > paddleX && x < paddleX + paddleWidth) {
			dy = -dy
		} else {
			lives--
			if (!lives) {
				console.log('GAME OVER')
				document.location.reload()
			} else {
				x = canvas.width / 2
				y = canvas.height - 30
				dx = 3
				dy = -3
				paddleX = (canvas.width - paddleWidth) / 2
			}
		}
	}
	
	x += dx
	y += dy
}

function drawBall() {
	ctx.beginPath();
	ctx.arc(x, y, ballRadius, 0, Math.PI*2);
	ctx.fillStyle = "#0095DD";
	ctx.fill();
	ctx.closePath();
}