var pokemonRoster = [["Ninetales", "Fire", 73, 76, 75, false], 
    ["Abra", "Psychic", 25, 20, 15, false],
    ["Alakazam", "Psychic", 55, 50, 45, true],
["Pikachu", "Electric", 35, 55, 40, false]
]; //Displaying each list: 1st dimension array = all information for ONE pokemon: 2nd dimension = specific data (name, type, HP, Attack, Defense, Legend)

for (var i = 0; i <= 3; i++){/* 3 is a specific number representing the number of elements in the 1st dimension (4, but 3 counting from 0*/
    console.log(i + ". Name: " +  pokemonRoster[i][0] + " > Type: "+ pokemonRoster[i][1] + " > HP: " + pokemonRoster[i][2] +" > Attack: "+ pokemonRoster[i][3] + " > Defense: "+  pokemonRoster[i][4] + " > Legend: " + pokemonRoster[i][5]);/*[i][x] means while i is a number, it will log to the console every piece of information from the 0th element of the array.*/
};
