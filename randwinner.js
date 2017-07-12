var people = ["Chris", "Will", "Edgar", "Faisal", "Cool Nick"];

function getRandomWinner(index) {
    var randomIndex = Math.random() * index;
    var result = Math.floor(randomIndex);
    return result;
}

console.log(people[getRandomWinner(people.length)])