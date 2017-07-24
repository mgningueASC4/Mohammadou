var x;
var y;
var alienx;
var alieny;
var xIncrement = -2;
var bulletx;
var bullety;
var bulletfire;
var bulletIncrement = 8;
var bulletfirex;
var bulletfirey;

function Pewpew(x,y){
    this.x = x;
    this.y = y;

  this.show = function(){
       noStroke();
        fill(150,0,255);
        ellipse(this.x,this.y, 15,15);
    }
    this.move = function(){
        this.y = this.y - 5
    }   
}

function setup(){
    createCanvas(windowWidth,windowHeight);
    background('150');
    //frameRate(5);
    //player coordinates
    x = width/2;
    y = (5/6) * height;
    alienx = width/2;
    alieny = (1/10)*height;
    bulletx = (x+30)
    bullety = (y)
}

function draw(){
    //when arrow key down, square moves
    if (keyIsDown(LEFT_ARROW)){
        //if (bulletfire == false){
        if (x<=0 ){
            x=0;
            bulletx=30;
        }
        x-=10;
        bulletx -=10;
        //}
    }
    if (keyIsDown(RIGHT_ARROW)){
         //if (bulletfire == false){
         if (((x+100)>=width)){
             x = (width-100)
             bulletx = (width-70);
         }
        x+=10;
        bulletx += 10;
        //}
    }
    //rectangle following x and y coordinates based on left and right arrow
    clear();
    fill(0,255,0);
    rect(x, y, 100, 100);
    //shooting "bullet"(i.e. rectangle)
    fill(0,0,255);
    rect(bulletx,bullety, 40,40)
    rect(bulletfirex, bulletfirey, 40, 40)
    //enemy alien
    for (var i = 0)
    fill(255,0,0);
    rect(alienx, alieny, 100, 100);
    //alien automatic movement from side to side, if reaches border, goes oopposite way
    alienx += xIncrement;
    if (((alienx+100) >= width) || ((alienx)<=0)){
        xIncrement = xIncrement*(-1)
    }
    if (bulletfire==true){
        bulletfirey -= bulletIncrement;
    }
}

function keyPressed(){
    if (keyCode == UP_ARROW){
        bulletfire = true;
        bulletfirex = bulletx
        bulletfirey = bullety
    }
}


