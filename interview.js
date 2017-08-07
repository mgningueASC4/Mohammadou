

var a = 5
var b = 10

function draw(num){
    str = ""
    for (var i=0; i < num; i++){
        var x= 0 
        while(x<=i){
        str += "*"
        x++;
        }
        str += "\n"
    }    
    return str
}

console.log(draw(8));