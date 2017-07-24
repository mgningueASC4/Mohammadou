//as an array, NOT LITERAL, therefore can change

//var rectArray = [];
var num = [] 
//var choice = [] 
function setup() {
    createCanvas(windowWidth,windowHeight);
    background(150);
    //pushing rect to the array
    for (var row = 0; row <4; row++){
        rect(row*160, 0, 160,160)
    }
    num.push
    (Math.floor(Math.random()*4));
}

function mousePressed(){
    //One box, if mouse within square, make red
    for (var rec = 0; rec<4; rec++){
        var minx = (rec*160)
        var maxx = (160*(rec+1)) 
        if ((0<mouseX<160) && mouseY<160){
            fill(255,0,0);
            rect(minx,0,160,160);
            }
        else{
            background("yellow")
        }
    }
}