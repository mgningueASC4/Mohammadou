var choices = ["rock", "scissors", "paper"]

var randomChoice = Math.floor(Math.random() * 3);
var randomChoice2 = Math.floor(Math.random() * 3);

var p1choice = choices[randomChoice]; // Scissors
var p2choice = choices[randomChoice2]; // Paper
//---------------------------------------------------------
if (p1choice === p2choice) {
    console.log("It's a tie!")
} else if (p1choice === "rock" && p2choice == ) {
    if (p2choice === "rock" ) {
        console.log("Player 2 wins")
        console.log("Rock beats Scissors!")
    } else {
        console.log("Player One Wins.")
        console.log("Scissors cuts Paper!")
    }
} else if (p1choice === "rock") {
    if (p2choice === "scissors") {
        console.log("Player One Wins.")
        console.log("Rock Beats Scissors!")
    }
    else {
        console.log("Player Two Wins.")
        console.log("Paper wraps Rock!")
    }
} else if (p1choice === "paper") {
    if (p2choice === "scissors") {
        console.log("Player Two Wins.")
        console.log("Scissors cut Paper!")
    } else if (p2choice === "rock") {
        console.log("Player One Wins.")
        console.log("Paper wraps Rock!")
    }
} 
