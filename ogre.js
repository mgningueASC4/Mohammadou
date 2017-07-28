function displayStats(){
    $('#stats').text('It works!')
}

function attack(){
    alert('You killed an ogre. You win!')
}

function setup(){
    $('body').append("<h1>Welcome to the Ogre Game!</h1>");
    $('h1').css("text-align", "center")
    $('body').append("<div><h3>Stats</h3><p id='stats'></p></div>")
    $('div').css("text-align", "center")
    $('div').css("font-size", "25px")
    $('body').append("<button onclick='attack()'>attack Ogre</button>")
    $('body').append('<div id=ogre</div>')
}
//Wait until document is ready!
$(document).ready(setup);