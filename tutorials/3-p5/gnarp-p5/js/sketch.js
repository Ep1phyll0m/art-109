let xPos = 0 //stores lagging x position
let yPos = 0 //stores lagging y position
let easing = 0.05; //speed of ease 
let canvas;

function preload() {
    img = loadImage('images/tbh.png');
}

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0);
    canvas.style("z-index", -2);
    describe('An image of the Tbh creature');
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    //background(125);
    clear();
    xPos = xPos + ((mouseX - xPos) * easing)
    yPos = yPos + ((mouseY - yPos) * easing)

    ////drawThing(xPos, yPos);
    drawTbh(xPos, yPos);
}

function mouseMoved() {

    //drawThing(mouseX - 50, mouseY + 75);
}

function drawThing(_x, _y) {

    //draw eyeballs
    fill(255);
    ellipse(_x, _y, 30, 30);
    ellipse(_x - 20, _y, + 5, 30, 30);


    //draw pupils
    fill(0);
    ellipse(_x + 10, _y, 5, 5);
    ellipse(_x - 10, _y + 5, 5, 5);

    // strokeWeight(0);
    // fill(random(200, 255), random(200, 255), random(200, 255));
    // ellipse(_x, _y, 30, 30);
}

function drawTbh(_x, _y) {
    image(img, _x + 10, _y, 90, 100, 5);
}