// Get the canvas and context
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d');

// Set canvas width and height to full window size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Ball properties
const ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    radius: 10,
    dx: 4,
    dy: 4
};

// Draw the ball on the canvas
function drawBall() {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fillStyle = "#fff";
    ctx.fill();
    ctx.closePath();
}

// Update ball position
function updateBallPosition() {
    ball.x += ball.dx;
    ball.y += ball.dy;

    // Bounce off the top and bottom edges
    if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
        ball.dy *= -1;
    }

    // Bounce off the left and right edges
    if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) {
        ball.dx *= -1;
    }
}

// Main game loop
function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
    drawBall();
    updateBallPosition();
    requestAnimationFrame(gameLoop);
}

// Start the game loop
gameLoop();
