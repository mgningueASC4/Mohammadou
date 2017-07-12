function coolNick(number){
    // want to use input as the range
    var randNumber = Math.random() * number;
    var result = Math.floor(randNumber);
    return result;   
}

console.log(coolNick(10));

