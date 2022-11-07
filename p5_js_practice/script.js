var colorM = 0
var sizeM = 10;


function setup() {
    var canvas = createCanvas(400, 400);
    canvas.parent('sketch-holder');
    background(240);
}

function draw() {
    fill(colorM);

    if (sizeM >= 100) {
        sizeM = 100;
    } else if (sizeM <= 1) {
        sizeM = 1;
    }

    if (mouseIsPressed) {
        noStroke();
        circle(mouseX, mouseY, sizeM);
    }
}

function keyPressed() {
    if (keyCode === 49) {
        colorM = 'red';
    } else if (keyCode === 50) {
        colorM = 'blue';
    } else if (keyCode === 51) {
        colorM = 'yellow';
    } else if (keyCode === 52) {
        colorM = 'green';
    } else if (keyCode === 53) {
        colorM = 'purple';
    } else if (keyCode === 54) {
        colorM = 'black';
    } else if (keyCode === 55) {
        colorM = 'white';
    } else if (keyCode === 56) {
        colorM = 'rgb(240, 240, 240)';
    } else if (keyCode === UP_ARROW) {
        sizeM += 5;
    } else if (keyCode === DOWN_ARROW) {
        sizeM -= 5;
    } else if (keyCode === SHIFT) {
        background(240);
    }
}