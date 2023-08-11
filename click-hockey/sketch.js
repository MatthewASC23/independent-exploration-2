let xPos = 250;
let yPos = 0;
let xSpeed = 2;
let ySpeed = 2;
let score = 0;

function setup() {
    createCanvas(500, 500);

    noStroke();

    rectMode(CENTER);
}

function draw() {
    background(222);

    // draw goal
    fill(0, 255, 0);
    rect(250, 490, 60, 20);

    // draw ball
    fill(255, 0, 255);
    rect(xPos, yPos, 30, 30);

    // draw score
    fill(18);
    textSize(20);
    text("Score: " + score, 10, 30)


    // move forward
    xPos += xSpeed;
    yPos += ySpeed;

    // wrap around if boundary exceeded
    if (xPos < -15) {
        xPos = 515;
    }
    if (xPos > 515) {
        xPos = 0;
    }
    if (yPos > 515) {
        yPos = -15;
        if(xPos > 190 || xPos < 310){
            score--;
        }
    }

    // check if in goal
    if (xPos + 15 <= 310 && xPos - 15 >= 190 && yPos + 15 >= 480) {
        score ++;
        // reset position and speed
        xPos = random(15, 485);
        yPos = 0;
        xSpeed = random(-5, 5);
        ySpeed = random(0, 10);
    }
}

function mouseClicked() {
    xSpeed = random(-5, 5);
    ySpeed = random(0, 5);
}