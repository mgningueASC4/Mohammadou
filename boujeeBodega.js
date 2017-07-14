/* Welcome to Mohammadou's Boujee Bodega!*/
/* Where everything is $100 dollars or more! ;)*/

var prompt = require('prompt-sync')(); //Allows for prompt command to be used: credut 

var cat = "KoolKat247" // not important
var money = 1000
var name = prompt("What's your name? ") //asks for name (not important)

// var i=0;
// while (i<10){
//     console.log(i)
//     i++;
// }

while (money > 0){
    var item = prompt("What would you want to buy?")
    console.log("You purchased the " + item);
    money = money - 100; //everything is $100 so it subtracts 100 from the money
    console.log(" you have $" + money + " left."); // Tells you how much money you owe each time
}
console.log("You finished up your money! Come back when you have more!")
