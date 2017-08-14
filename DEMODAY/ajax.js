function setup(){
    // productName="Samsung";
    // $.getJSON("https://price-api.datayuge.com/api/v1/compare/?apikey=RzQF3I2gTT7N4iWvBO3SKc1MUhy3t0JiGKZ&product="+productName,
        
    //     function(data) {
    //         console.log(data);
            
    //     });
    $.getJSON(
      "https://price-api.datayuge.com/api/v1/compare/detail?id=ZToxMjIyNA&api_key=TLHyGyOHvYVRxIeEgubFti0thQPGSMLHeeU",
      function(data) {
            console.log(data);
          var info = data.data
          let nem = info.product_name
          let price = info.product_lowest_price;
          let imag = info.product_images[0];
          let retailer= info.product_lowest_price;
          $('body').append(
            `<div class = "card">
            <div class="card-image">
              <img class = "prod_img" src="${imag}">
            </div>
            <div class="card-content">
              <span class="card-title black-text>>${nem}</span>
              <p><i class="material-icons">attach_money</i>${price}</p> <h2 class = "retailer">${retailer}</h2>
              <button onclick=
          </section>`
          )
      }
    )
}

$(document).ready(setup);
// var unirest = require('unirest');

// $(document).ready(function(){
//     unirest.get("https://datayuge-price-comparison-india-v1.p.mashape.com/search.php?product=Iphone+6+s")
//     .header("X-Mashape-Key", "zdvo8ktKzOmshXEBASdh4X6l7ZP2p1uEzX3jsnxFDZjl3zx8OM")
//     .header("Accept", "application/json")
//     .end(function (result) {
//   console.log(result.status, result.headers, result.body);
// });
// })