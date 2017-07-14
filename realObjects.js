function Car(weight, horsepower, transmission, drivetrain, country){ //diferent   statistics
    this.weight = weight //each one rreps a key that is pushed in
    this.horsepower = horsepower
    this.transmission = transmission
    this.drivetrain =   drivetrain
    this. country = country 
}

var toyotaCamry = new Car(2000, 207, "9-speed CVT", "FWD", "Japan-USA")
console.log(toyotaCamry)

function Player(team, position, number){
    this.sayTeam = function(){
        console.log("My team is " + this.position);
    this.sayPosition = function(){
        console.log("My position is " + this.position);
    }
    this.sayNumber = function(){
        console.log("My number is " + this.number)
    }
}

var jamesHarden = new Player("Rockets", "Point Guard", 13);
jamesHarden.sayTeam;
jamesHarden.sayPosition;
jamesHarden.sayNumber;

function Person(ethnicity, race, nationality){
    this.ethnicity = ethnicity;
    this.nationality = nationality;
    this.race = race;
}



function Footballer(height, weight, age, team, position, number, country){
    this.height = height;
    this.weight = weight;
    this.age = age;
    this.team = team;
    this.position = position;
    this.number = number;
    this.country = country;
}

var lionelMessi = new Footballer(170, 72, 30, "Barcelona", "Forward", 10, "Argentina")
console.log(lionelMessi.age)