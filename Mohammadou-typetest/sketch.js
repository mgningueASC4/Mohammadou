var arr = ["Jacky John!", "JImmybob", "Taytataraaa!!", "Gratatataa"]
var x = (Math.random(4));
var sample = arr[x]
console.log(x.toString)
//var sample = "golor"
var points = 0;
var message;


function setup(){
    createCanvas(windowWidth,windowHeight);
    background('yellow');
        intro = "Test Your Typing!"
        textSize(30);
        text(intro, 200,200);
    //shows sample sentence
        textSize(20);
        text(sample, 250, 400);
    //input textbox in 
    inp = createInput('', "text");
    inp.position(250, 500)
    textSize(40);
    text("Points:", 150, 600)
}


/*correct = "How do you like the food?";
    fill(255,255,255);
    text(correct, 200,200);
    fill(255,255,255);
    text("Your input: ", 200, 500);
}*/

function keyTyped(){
    if (keyCode === ENTER){
        background('yellow');
        intro = "Test Your Typing!"
        textSize(30);
        text(intro, 200,200);
    //shows sample sentence
        textSize(20);
        text(sample, 250, 400);
        textSize(30)
        text("Points:", 150, 600)
        if (inp.value() === sample){
            points += 10;
            message = text("Great Job!",200,700)
            textSize(30)
            text(points, 250, 600)
        }
        else {
            message = text("You need to practice more!", 200, 700)
            points -= 10;
            textSize(30)
            text(points, 250, 600)
        }
    }
}




