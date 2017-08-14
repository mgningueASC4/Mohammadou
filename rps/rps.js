$("#game-start").hide();
var name = $("#userName").val(); 
var userInfo = firebase.database().ref('/users/'+ name);
var score = 0;

function getName(){
    name = $("#userName").val();
    //Used to see if Username already exists...If so, will use that user's info
    userInfo = firebase.database().ref('/users/'+ name);
    $('body').append("<h2>Hello! Your username is : <br />" + name + "</h2>");
    //$("body").append("");
    $("#user-data").hide();
    $("#score").append(`${score}`);
}

//---------------------------------------------------------*/
//Test function to see if doing it correct, alerts if user exists
function showsifExists(userId, exists,val) {
  if (exists) {
      var db = firebase.database().ref('/users/');   
    db.on("child_added", function(rowData){
    $("#score").empty();    
    $("#score").append(`${rowData.val().SCORE}`);
  }) }else {
    alert('user ' + userId + ' does not exist!');
  }
}
//Checks f this user exists
function checkExists(userId,val) {
    userInfo.on('value', function(row) {
      //if the value not null, then exists = true
        var exists = (row.val().SCORE!== null);
        showsifExists(userId, exists, val);
    });
}
//actual fights
function fight(weapon){
    var choices = ["rock", "paper", "scissors"];
    var randChoice = Math.floor(Math.random() * 3);
    //gets computerized choice
    var p2choice = choices[randChoice]; 




    if (weapon === p2choice) {
        $('#results').empty()
        $('#results').append("<h3>It's a tie!</h3>")
    } //when weapon is rock, compare
    else if (weapon === "rock"){
        if (p2choice === "scissors") {
            $('#results').empty()
            $('#results').append(
                `<div id= put-in-results">
                <div class='uwin'>
                    <h3>You win!</h3>
                </div>
                    <h3>Computer Choice: <br /> ${p2choice}</h3>
                    <img src="scissors.jpg">
                    <h3>Your Choice Choice: <br /> ${weapon}</h3>
                    <img src="rock.jpg">
                    <h3>Rock beats Scissors!</h3>
                </div>`
            )
            score+=10;
            updateScore();
        } else if(p2choice ==="paper"){
            $('#results').empty()
            $('#results').append(
            `<div id= put-in-results>
                <div class='theywin'>
                    <h3>Computer Wins!</h3>
                </div>
                    <h3>Computer Choice: <br /> ${p2choice}</h3>
                    <img src="paper.jpg">
                    <h3>Your Choice Choice: <br /> ${weapon}</h3>
                    <img src="rock.jpg">
                    <h3>Rock beats Scissors!</h3>
            </div>`
            )
            score-=10;
            updateScore();
        }
    } //when weapon is scissors, compare
    else if (weapon === "scissors") {
        if (p2choice === "rock") {
            $('#results').empty()
            $('#results').append(
                `<div id= put-in-results">
                <div class='theywin'>
                    <h3>Computer Wins!</h3>
                </div>
                    <h3>Computer Choice: <br /> ${p2choice}</h3>
                    <img src="rock.jpg">
                    <h3>Your Choice Choice: <br /> ${weapon}</h3>
                    <img src="scissors.jpg">
                    <h3>Rock beats Scissors!</h3>
                </div>`
            )
            score-=10;
            updateScore();
        }
        else if(p2choice=="paper"){
            $('#results').empty()
            $('#results').append(
                `<div id= put-in-results">
                <div class='uwin'>
                    <h3>You win!</h3>
                </div>
                    <h3>Computer Choice: <br /> ${p2choice}</h3>
                    <img src="paper.jpg">
                    <h3>Your Choice Choice: <br /> ${weapon}</h3>
                    <img src="scissors.jpg">
                    <h3>Scissors cut Paper!</h3>
                </div>`
            )
        
        score+=10;
        updateScore();                        
        }
    } //when weapon is paper, compare 
    else if (weapon === "paper") {
        if (p2choice === "scissors") {
            $('#results').empty()
            $('#results').append(
                `<div id= put-in-results">
                <div class='theywin'>
                    <h3>Computer Wins!</h3>
                </div>
                    <h3>Computer Choice: <br /> ${p2choice}</h3>
                    <img src="scissors.jpg">
                    <h3>Your Choice Choice: <br /> ${weapon}</h3>
                    <img src="paper.jpg">
                    <h3>Scissors cut Paper</h3>
                </div>`
            )
            score-=10;
            updateScore();
        } else if (p2choice === "rock") {
            $('#results').empty()
            $('#results').append(
                `<div id= put-in-results">
                <div class='uwin'>
                    <h3 style="color:green">You Win!</h3>
                </div>
                    <h3>Computer Choice: <br /> ${p2choice}</h3>
                    <img src="rock.jpg">
                    <h3>Your Choice Choice: <br /> ${weapon}</h3>
                    <img src="paper.jpg">
                    <h3>Paper wraps Rock!</h3>
                </div>`
            )
            score+=10;
            updateScore();
        }
    } 
    $("#game-start").show()
    //updateScore();
}

//Set database object

//Score is changed
function updateScore(){
    $("#score").empty();
    $("#score").append(`<h2 id="score"> score : ${score}</h2>`);
    saveData();
}
function saveData(){
    var value = {
        "SCORE": score
    }
    checkExists(name,value);
    //Update database here WRITING DATA
    userInfo.set(value);
}

var db = firebase.database().ref('/users/');    
db.on("child_added", function(rowData){
    $("#leaderboard").append(`<p>Name: ${rowData.key}, Score: ${rowData.val().SCORE} `)
})
//HERE IT READS DATA
// function readData(){
    //check if value reads it not
    // database.on('value', function(snapshot){
    //     if (snapshot.val()===null){
    //         userinfo.set({
    //            "score": 0; 
    //         })
    //     }
    //     else{
    //         gamesWon = snapchat.val().score;
    //     }
    // })
//     database.on('child_added', function(rowData){
//         var row = rowData.val();
//         var name = row.NAME;
//         var score = row.SCORE;
//         $("#score").append(`${score}`);
//     })
// }