var x = 0;
var y = 10;
//setup Just calls once
function setup(){
    createCanvas(windowWidth, windowHeight);
    background('purple');
}
var x = 100;
var xIncrement = 12;
var yIncrement = 6;
var y = 100;
var s = 100;
//draw runs repeadetly
function draw(){
    background('purple');
    fill(200,120,3);
    ellipse(x,y,s);
    x += xIncrement;
    y += yIncrement;
    if (((x+50) >= width) || ((x-50)<=0)){
        xIncrement *= (-1)
    }
    if (((y+50)>=height)||((y-50)<=0)){
        yIncrement *= (-1)
    }
}