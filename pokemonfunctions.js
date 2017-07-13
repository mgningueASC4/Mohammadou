// array of alphabet 
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]



// function which makes a random letter
function randLetter(){
    return alphabet[Math.floor(Math.random()*alphabet.length)]//gets alphabet letter from random number that is the length of the alphabet
}


function randWord(){
    var word = ""
    var length = Math.floor(Math.random()*13)
    for (i=0; i<= length; i++){
        word += randLetter()
    }
    return word
}

function randSentence(){
    var sentence = ""
    var phraselength = Math.floor(Math.random()*15)+2
    for (i=0; i<=phraselength; i++){
        if (i == 0){

        }
        sentence += " ";
        sentence += randWord();
    }
    sentence += "."
    return (sentence.charAt(1).toUpperCase() + sentence.slice(2))
}
console.log(randSentence());

var firstPokemon = ["Vulpix", 41, 38]
var secondPokemon = ["Arcanine", 110, 90]
function pokeAttack(firstPokemon, secondPokemon){
    secondPokemon[2] = (secondPokemon[2]- firstPokemon[1]);
    return secondPokemon;
}

console.log(pokeAttack(firstPokemon, secondPokemon));