var prompt = require('prompt-sync')();//credit:jakeclements
var mashArray = ["Omega stage", "Congo Jungle", "Dream Land", "Mushroom Kingdom"]//makes first locations
var firstQuestion = [1, 2, 3, 4]//number of times
var secondQuestion = ["Bowser", "Jigglypuff", "Cloud", "Toon Link"]//characters

//Will ask and acquire the person being striked and number of times hit
function q1(firstQuestion){
    var q1 = prompt("How many times will you strike? ")
    firstQuestion.push(q1) //as instructed, adds answers to both arrays
    return firstQuestion;
} 
function q2(secondQuestion){
    var q2 = prompt("Who will you choose to fight? ")
    secondQuestion.push(q2)
    return secondQuestion
}

 //after returning 2 values, e
var q1 = q1(firstQuestion);
var q2 = q2(secondQuestion);
function result(a1, a2, mashArray){
    var n = Math.floor(Math.random()*4)
    console.log("You fought " + a2[n] + " in the " + mashArray[n] +  " and hit them " + a1[n] + " times. Too bad. Mewtwo WINS! ;)")
}

console.log(q1);
console.log(q2);
result(q1, q2, mashArray);
