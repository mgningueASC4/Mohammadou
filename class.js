var charizard = {
    "HP" : 266,
    "level" : 32
}

var blastoise = {"HP": 150,
    "Level": 55
}

function Pokemon(HP, level){
    this.HP = HP;
    this.level = level;
}

var squirtle = new Pokemon(30,10)
console.log(squirtle)