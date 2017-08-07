var dict= []

function find(word){
    for (i=0;i<dict.length;i++){
        var y = 0
        if (word!=dict[i]){
            y+=1
        } 
    }
    if (y==(dict.length-1)){
            return false
        }
        else{
            return true
        }
}

function find(word){
    letter = word.charAt(0)
}