//pokemonArray = []
//prompt = require('prompt-sync')();

//automatically creates pokemon objects, all in Pokemon class with var (insert pokemon)
function Pokemon(name, type, hp, def, atk, legend){
    this.name = name; 
    this.type = type;
    this.hp = hp;
    this.def = def;
    this.atk = atk;
    this.legend = legend;
}
//1st pokemons
var Squirtle = new Pokemon("Squirtle", "Water", 44, 65, 48, false);
var Rattata = new Pokemon("Rattata", "Normal", 30, 35, 56, true);
var Blastoise = new Pokemon("Blastoise", "Water", 79, 100, 83, true);
var Metapod = new Pokemon("Metapod", "Bug", 50, 55, 20, false);
var Raticate = new Pokemon("Raticate", "Normal", 55, 60, 81, true);
var Raichu = new Pokemon("Raichu", "Electric", 35, 40, 55, true);

//makes random Pokemon
var pokeRoster1 = [Squirtle, Rattata, Blastoise, Metapod, Raticate, Raichu]
var select = Math.floor(Math.random()*pokeRoster1.length)
var choice1 = pokeRoster1[select]

//2nd pokemons
var Charizard = new Pokemon("Charizard", "Fire", 78, 84, 78, false)
var Umbreon = new Pokemon("Umbreon", "Dark", 95, 65, 110, false)
var Decidueye = new Pokemon("Decidueye", "Grass/Ghost", 78, 107, 75, false)
var Wishiwashi = new Pokemon("Wishiwashi", "Water", 45, 140, 130, false)
var Lucario = new Pokemon("Lucario", "Fighting/Steel", 70, 110, 70, false)
var Abomasnow = new Pokemon("Abomasnow", "Grass/Ice", 90, 92, 75, false) 

//makes random Pokemon
var pokeRoster2 = [Charizard, Umbreon, Decidueye, Wishiwashi, Lucario, Abomasnow]
var select2 = Math.floor(Math.random()*pokeRoster2.length);
var choice2  = pokeRoster2[select2];

//positioning of"pokemons"
var x;
var y;
var a;
var b;
//random amount lost from both pokemon (as percentage of other's attack)
var hploss1 = Math.random()
var hploss2 = Math.random()
function setup(){
    createCanvas(windowWidth,windowHeight)
    background('turquoise');
    //your pokemon position
    x = (20);
    y = ((2/3)*height);
    //opponent pokemon position
    a = ((2/3) * width)
    b = (200)
    alert("Welcome to Pokemon Battle! Press the 'a' key to begin!")
    //creates attack button
    button = createButton('ATTACK! >:o');
    button.position(((2/5)*width), ((4/5)* height));
    button.mousePressed(fight);
}

function draw(){
    //your pokemon
    fill(255,0,0);
    rect(x, y, 100, 100);
    //your stats
    fill(0,0,50)
    rect (x, y-50, 150, 30)
    fill(255,255,255);
    text(("Name: " + choice1.name + " HP: " + choice1.hp), x + 10, y-30) 
    //opp. pokemon
    fill(200,153,203);
    ellipse(a, b, 100);
    //opp. stats
    fill(0,0,50);
    rect (a-50, b-100, 150, 30);
    fill(255,255,255);
    text(("Name: " + choice2.name + " HP: " + choice2.hp), a-40, b-80); 
}

function mousePressed(){
    if (key == 'a'){
        alert("You are Pokemon: " + choice1.name + "! Your hp is: " + choice1.hp + "! Click the 'OK' button to know your opponent!")
        alert("Your opponent is: " + choice2.name + "! Their hp is: " + choice2.hp + "! Your attack is 'PUNCH'. Press  the 'P' key to initiate the punch Attack!")
    }
}

function fight(){
    choice2.hp -= (Math.floor(hploss1* choice1.atk));
        /*alert("You hit " + Rattata.name + "! His HP is Now: " + Rattata.hp );*/
        while (x != a){
            x += 2
        }
    choice1.hp -= (Math.floor(hploss2* choice2.atk));
        /*alert("! " + Rattata.name + " hit you! " + Squirtle.name + "'s HP is now: " + Squirtle.hp + "! Type 'P' to attack again!");*/
    if ((choice2.hp <= choice1.hp) && (choice2.hp <= 0|| choice1.hp <= 0)){
    alert(choice2.name + " has won!")
    }
    else if ((choice1.hp <= choice2.hp) && (choice2.hp <= 0|| choice1.hp <= 0)){
    alert(choice1.name + " has won!")
    }   
}


/*

//prints your total array
function printroster(roster){ 
    for( var i=0; i<6;i++){
    console.log(roster[i])
    }
}

// subtracts 10 hp from each using loop and hp key
function pokemonAttacked(array){
    for (var i=0; i < pokemonArray.length; i++){
        array[i].hp -= 10
    }
    return array
}
//prompts how much HP, randomly chooses pokemon and subtracts your input. Then gives you a nice ending sentence
function pokeAttack(array){
    var pokeHP = prompt("How much damage would you like to inflict?")
    var pokemonChoice = Math.floor(Math.random()*array.length)
    array[pokemonChoice].hp -= pokeHP
    console.log("You hit " + array[pokemonChoice].name+ ". " +  array[pokemonChoice].name + "'s HP is now " + array[pokemonChoice].hp+"!")
    return array
}
//pokeAttack(pokemonRoster)

//prompts for pokemon data, then adds it. c'est tres simple!
function newPokemon(array){
    var name = prompt("What is your Pokemon's name")
    var type = prompt("What is your Pokemon's type")
    var hp = prompt("What is your Pokemon's hp")
    var def = prompt("What is your Pokemon's defense?")
    var atk = prompt("What is your Pokemon's attack?")
    var legendary= prompt("Is your Pokemon legendary? Respond 'true' or 'false")
    var newPokemon = new Pokemon(name, type, hp, def, atk, legendary)
    array.push(newPokemon)
    return array
}


//removes a random pokemon
function pokeRemove(array){
    var choice = Math.floor(Math.random()*array.length)
    array.splice(choice, 1);
    return array
}
*/
//Bernardo's pokemon
/*var Charizard = new Pokemon("Charizard", "Fire", 78, 84, 78, false)
var Umbreon = new Pokemon("Umbreon", "Dark", 95, 65, 110, false)
var Decidueye = new Pokemon("Decidueye", "Grass/Ghost", 78, 107, 75, false)
var Wishiwashi = new Pokemon("Wishiwashi", "Water", 45, 140, 130, false)
var Lucario = new Pokemon("Lucario", "Fighting/Steel", 70, 110, 70, false)
var Abomasnow = new Pokemon("Abomasnow", "Grass/Ice", 90, 92, 75, false) 
var roster = [Charizard, Umbreon, Decidueye, Wishiwashi, Lucario, Abomasnow]

function pokemonBattle(roster1, roster2){
    var choice = prompt("Choose the Pokemon that you want to battle from Roster 1: 0 = Squirtle, 1 = Blastoise, 2 = Metapod, 3 = Rattata, 4 = Raticate, 5 = Raichu");
    var poke1 = roster1[choice];
    console.log("You chose: " + poke1)
    var choice 2 = prompt("Choose the Pokemon that you want to battle from Roster 1: 0 = Charizard, 1 = Umbreon, 2 = Decidueye, 3 = Wishiwashi, 4 = Lucario, 5 = Abomasnow")
    var poke2 = roster2[choice]
    console.log("You chose: " + poke1)
    //Just choose
}
*/