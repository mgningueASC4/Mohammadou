$("#game-start").hide();

var database = firebase.database().ref();
var score;

function getName(){
    var person = document.getElementById('userName').value
    $('body').append("<h2>Hello! Your username is : <br />" + person + "</h2>");
    //$("body").append("");
    $("#user-data").hide();
}

//---------------------------------------------------------*/
function fight(weapon){
    var choices = ["rock", "paper", "scissors"];
    var randChoice = Math.floor(Math.random() * 3);
    //gets computerized choice
    var p2choice = choices[randChoice]; 




    if (weapon === p2choice) {
        $('body').append("<h3>It's a tie!</h3>")
    } else if (weapon === "rock"){
        if (p2choice === "scissors") {
            $('body').append("<h3>You win</h3>")
             $('body').append(`<h3>Computer Choice: <br /> ${p2choice}</h3>`)
            $('body').append(`<h3>Your Choice Choice: <br /> ${weapon}</h3>`)
            $('body').append("<h3>Rock beats Scissors!</h3>")
            score+=10;
            updateScore();
        } else if(p2choice ==="paper"){
            $('body').append("<h3>Computer Wins.</h3>")
             $('body').append(`<h3>Computer Choice: <br /> ${p2choice}</h3>`)
            $('body').append(`<h3>Your Choice Choice: <br /> ${weapon}</h3>`)
            $('body').append("<h3>Paper wraps Rock!</h3>")
        }
    } else if (weapon === "scissors") {
        if (p2choice === "rock") {
        $('body').append("<h3>Computer Wins!</h3>")
         $('body').append(`<h3>Computer Choice: <br /> ${p2choice}</h3>`)
        $('body').append(`<h3>Your Choice Choice: <br /> ${weapon}</h3>`)
        $('body').append("<h3>Rock Beats Scissors!</h3>")
        }
        else if(weapon=="paper"){
        $('body').append("<h3>You Win!</h3>")
         $('body').append(`<h3>Computer Choice: <br /> ${p2choice}</h3>`)
        $('body').append(`<h3>Your Choice Choice: <br /> ${weapon}</h3>`)
        $('body').append("<h3>Scissors Cut Paper!</h3>")
        score+=10;
        updateScore();                        
        }
    } else if (weapon === "paper") {
        if (p2choice === "scissors") {
            $('body').append("<h3>Computer Wins!</h3>")
            $('body').append(`<h3>Computer Choice: <br /> ${p2choice}</h3>`)
            $('body').append(`<h3>Your Choice Choice: <br /> ${weapon}</h3>`)
            $('body').append("<h3>Scissors cut Paper!</h3>")
        } else if (p2choice === "rock") {
            $('body').append("<h3>You Win!</h3>")
             $('body').append(`<h3>Computer Choice: <br /> ${p2choice}</h3>`)
            $('body').append(`<h3>Your Choice Choice: <br /> ${weapon}</h3>`)
            $('body').append("<h3>Paper wraps Rock!</h3>")
            score+=10;
            updateScore();
        }
    } 
    $("#game-start").show()
}

//Set database object

//button executes this function
function updateScore(){
    var name = $("#userName").val();
    score;
    console.log(name + " : " + score);
    var value = {
        "NAME": name,
        "SCORE": score
    }
    //Update database here WRITING DATA
    database.push(value);
    readData();
}
//HERE IT READS DATA
function readData(){
    database.on('child_added', function(rowData){
        var row = rowData.val();
        var name = row.NAME;
        var score = row.SCORE;
        $("#score").append(`${score}`);
    })
}