pokemonArray = []
prompt = require('prompt-sync')();

//automatically creates pokemon objects, all in Pokemon class with var (insert pokemon)
function Pokemon(name, type, hp, def, atk, legend){
    this.name = name; 
    this.type = type;
    this.hp = hp;
    this.def = def;
    this.atk = atk;
    this.legend = legend;
}

var Squirtle = new Pokemon("Squirtle", "Water", 44, 65, 48, false);
var Blastoise = new Pokemon("Blastoise", "Water", 79, 100, 83, true);
var Metapod = new Pokemon("Metapod", "Bug", 50, 55, 20, false);
var Rattata = new Pokemon("Rattata", "Normal", 30, 35, 56, true);
var Raticate = new Pokemon("Raticate", "Normal", 55, 60, 81, true);
var Raichu = new Pokemon("Raichu", "Electric", 35, 40, 55, true);

pokemonRoster = [Squirtle, Blastoise, Metapod, Rattata, Raticate, Raichu]

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
//Bernardo's pokemon
var Charizard = new Pokemon("Charizard", "Fire", 78, 84, 78, false)
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
