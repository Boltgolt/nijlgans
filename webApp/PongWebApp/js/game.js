// Position variables for draw elements
var xP1 = 0;
var yP1 = 50;

var xP2 = width-10;
var yP2 = 120;

var xBall = 150;
var yBall = 100;

// Sizes for draw elements
var widthP = width/36;
var heightP = widthP*5;
var sizeBall = widthP*1.5;
var sizeWall = widthP;
var xWall = width/2-sizeWall/2

// Game variables to display
var gameTimer = 0;
var scoreP1 = 0;
var scoreP2 = 0;

var countdown = 0;

// Drawing logic
var ctx = c.getContext("2d");

// Initialization for draw style
ctx.fillStyle="#FFFFFF"
ctx.strokeStyle="#000000"
ctx.textAlign = "center";

// Animation frame
function animate() {
    // The actual drawing
    ctx.clearRect(0,0,width,height);
    ctx.font = "30px FFFForward"

    ctx.fillRect(xP1,yP1,widthP,heightP);
    ctx.stroke();

    ctx.fillRect(xP2,yP2,widthP,heightP);
    ctx.stroke();

    ctx.fillRect(xBall,yBall,sizeBall,sizeBall);
    ctx.stroke();

    ctx.fillText(scoreP1,width/2-50,50);
    ctx.fillText(scoreP2,width/2+50,50);

    // Walls
    for (var i = 0; i < height/10; i++) {
    ctx.fillRect(xWall,i*sizeWall*1.5-sizeWall*0.5,sizeWall,sizeWall);
    ctx.stroke();
    }

    // Countdown
    if (countdown > 0) {
        ctx.font = "100px FFFForward"
        ctx.fillText(countdown,width/2,height/2+50);
        ctx.strokeText(countdown,width/2,height/2+50);
    }
    window.requestAnimationFrame(animate);
  }
// Call to draw which gets repeated
window.requestAnimationFrame(animate);
