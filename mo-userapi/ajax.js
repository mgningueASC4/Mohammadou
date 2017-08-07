
function setup(){

    $.getJSON(
        'https://randomuser.me/api/',
        
        function(data) {
            console.log(data);
            //
            const info = data.results[0];
            let userFirstName = info.name.first;
            let userLastname = info.name.last;
            let photoID =info.picture.large ;
            $('.name').append(`
                <h2> Name: ${userFirstName} <br /> Last Name: ${userLastname} <br /></h2>
                <img src= ${photoID}> <br />
            `)
            //Location info
            let loc = info.location;
            console.log(loc)
            let state = loc.state;
            console.log(state);
            let city = loc.city;
            console.log(city);
            let street = loc.street;
            console.log(street);
            let postcode = loc.postcode
            console.log(postcode);
            $('#location').append(`<h2> Address: ${street}, ${city}, ${state}, ${postcode} </h3>`);
            let biznum = info.phone;
            let cell = info.cell;
            let email = info.email;
            $('#contact').append(`<h2>  `)
        }
    )
}

$(document).ready(setup);


