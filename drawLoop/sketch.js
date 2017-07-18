var x = 0;
var y = 10;
//setup Just calls once
function setup(){
    createCanvas(windowWidth, windowHeight);
    background('purple');
}
//draw runs repeadetly
function draw(){
    background('purple');
    fill(200,120,3);
    ellipse(x,y,200);
    x += 10;
    y += 10;
    if (x > width || y>height){
        x =0;
        y=0;
    }
}