var myPokemonRoster = ["Magmar", "Lapras", "Eevee", "Snivy", "Braviary"];
var firstToFight = myPokemonRoster[0];
var secondTOFight = myPokemonRoster[1];
myPokemonRoster.pop();
myPokemonRoster.push("Volcarona");
myPokemonRoster.push("Kyurem");
var RosterSize = myPokemonRoster.length

if (myPokemonRoster.length >= 5){
    for(var i=0; i<myPokemonRoster.length; i++){
        console.log(myPokemonRoster[i])
    }
    for(var i=5; i>=0; i--){
    console.log(myPokemonRoster[i])
    }
}
else {
    console.log("You Can’t Play! Not Enough Pokemon")
}



