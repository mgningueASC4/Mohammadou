/* Welcome to Mohammadou's Boujee Bodega!*/
/* Where everything is $100 dollars or more! ;)*/

var prompt = require('prompt-sync')();

var cat = "KoolKat247"
var money = 1000
var name = prompt("What's your name? ")

// var i=0;
// while (i<10){
//     console.log(i)
//     i++;
// }

while (money > 0){
    var item = prompt("What would you want to buy?")
    console.log("You purchased the " + item);
    money = money - 100;
}
console.log"("You finished up your money! Come back when you have more!"")
