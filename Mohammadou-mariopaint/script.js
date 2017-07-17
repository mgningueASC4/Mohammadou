
function setup(){
    resizeCanvas(1000,1000);
}






function mouseMoved() {
    var z = random(1,100)
    var t = random(1,100)
    var r = random(0,255);
    var g = random(0,255);
    var b = random(0,255);
    var x1 = random(10)
    var x2 = random(10)
    var y1 = random(10)
    var y2 = random(10)
    fill(r,g,b);
  rect(mouseX, mouseY, z, t);
    fill(r,g,b);
  ellipse(mouseX, mouseY, z, t)
  fill(r,g,b);
  triangle(mouseX,mouseY, mouseX-random(30), mouseX+random(30), mouseX+random(30), mouseX+random(30))
  // prevent default
  return false;
}

function mousePressed(){ 
    clear();
    background(random(255),random(255),random(255));
}