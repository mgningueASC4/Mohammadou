function setup(){
  var inp = createInput('');
  inp.input("go");
  createCanvas(windowWidth,windowHeight);
}

function myInputEvent(){
  console.log('you are typing: ', this.value());
}