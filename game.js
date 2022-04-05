var paddleHeight = 150;
var paddleWidth = 10;
var ballRadius = 25;
var halfPaddleHeight = paddleHeight / 2;
var speedOfPaddle1 = 0;
var positionOfPaddle1 = 460;
var speedOfPaddle2 = 0;
var positionOfPaddle2 = 460;
var topPositionOfBall = 510;
var leftPositionOfBall = 820;
var topSpeedOfBall = 0;
var leftSpeedOfBall = 0;
var score1 = 0;
var score2 = 0;

function startBall() {
    topPositionOfBall = 510;
    leftPositionOfBall = 820;
    if (Math.random() < 0.5) {
        var side = 1
    } else {
        var side = -1
    }

    topSpeedOfBall = Math.random() * 2 + 3;
    leftSpeedOfBall = side * (Math.random() * 2 + 3);
};


document.addEventListener('keydown', function (e) {
    if (e.keyCode == 87 || e.which == 87) { // W key
    speedOfPaddle1 = -10;
    }
    if (e.keyCode == 83 || e.which == 83) { // S Key
    speedOfPaddle1 = 10;
    }
    if (e.keyCode == 38 || e.which == 38) { // up arrow
    speedOfPaddle2 = -10;
    }
    if (e.keyCode == 40 || e.which == 40) { // down arrow
    speedOfPaddle2 = 10;
    }
}, false);

document.addEventListener('keyup', function (e) {
    if (e.keyCode == 87 || e.which == 87) {
        speedOfPaddle1 = 0;
    }
    if (e.keyCode == 83 || e.which == 83) {
        speedOfPaddle1 = 0;
    }
    if (e.keyCode == 38 || e.which == 38) {
        speedOfPaddle2 = 0;
    }
    if (e.keyCode == 40 || e.which == 40) {
        speedOfPaddle2 = 0;
    }
},  false);

// This function gets called 60 times per second
window.setInterval(function show() {
        positionOfPaddle1 += speedOfPaddle1;
        positionOfPaddle2 += speedOfPaddle2;
        topPositionOfBall += topSpeedOfBall;
        leftPositionOfBall += leftSpeedOfBall;

        if (positionOfPaddle1 <= 150) {
            positionOfPaddle1 = 150;
        }
        if (positionOfPaddle2 <= 150) {
            positionOfPaddle2 = 150;
        }

        if (positionOfPaddle1 >= window.innerHeight - paddleHeight) {
        positionOfPaddle1 = window.innerHeight - paddleHeight;
        }
        if (positionOfPaddle2 > window.innerHeight - paddleHeight) {
        positionOfPaddle2 = window.innerHeight - paddleHeight;
        }
        if (topPositionOfBall <= 150 || topPositionOfBall >= window.innerHeight - ballRadius) {
            topSpeedOfBall = -topSpeedOfBall
        }
        if (leftPositionOfBall <= paddleWidth) {
            if (topPositionOfBall > positionOfPaddle1 && topPositionOfBall < positionOfPaddle1 + paddleHeight) {
                    leftSpeedOfBall = -leftSpeedOfBall;
            } else {
                    score2++;
                    startBall();
            }
    }
        if (leftPositionOfBall >= window.innerWidth - ballRadius - paddleWidth) {
            if (topPositionOfBall > positionOfPaddle2 && topPositionOfBall < positionOfPaddle2 + paddleHeight) {
                    leftSpeedOfBall = -leftSpeedOfBall
            } else {
                    score1++
                    startBall();
            }
        }
        document.getElementById("paddle1").style.top = (positionOfPaddle1) + "px";
        document.getElementById("paddle2").style.top = (positionOfPaddle2) + "px";
        document.getElementById("ball").style.top = (topPositionOfBall) + "px";
        document.getElementById("ball").style.left = (leftPositionOfBall) + "px";
        document.getElementById('score1').innerHTML = score1.toString();
        document.getElementById('score2').innerHTML = score2.toString();
}, 1000/60);

