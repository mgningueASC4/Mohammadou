// Declare an array with two Cool Nick entries to increase his odds
var people = ["Chris", "Cool Nick", "Will", "Edgar", "Faisal", "Cool Nick"];
//Function to get random number
function getRandomWinner(index) {
    //var randomIndex = Math.random() * index;
    //var result = Math.floor(randomIndex);
    return Math.floor(Math.random()*index);
}

//Prints out a random name based function
console.log(people[getRandomWinner(people.length)])