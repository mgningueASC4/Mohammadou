function setup(){
  
    $("#searching").submit(function(e){
        e.preventDefault();
        search()
    })
}
const apiKey = "TLHyGyOHvYVRxIeEgubFti0thQPGSMLHeeU";


function search() {
    var search = $("#searchbar").val();
    console.log(search);
    productName=$("#searchbar").val();
    prodName = encodeURI(productName)
    console.log(prodName);
    $.getJSON(`https://price-api.datayuge.com/api/v1/compare/search?product=${prodName}&apikey=${apiKey}`,
        
        function(data) {
            console.log(data);
            
        });





    $.getJSON(
      "https://price-api.datayuge.com/api/v1/compare/detail?id=ZToxMjIyNA&api_key=TLHyGyOHvYVRxIeEgubFti0thQPGSMLHeeU",
      function(data) {
            console.log(data);
          var info = data.data
          let nem = info.product_name
          let price = info.product_lowest_price;
          let imag = info.product_images[0];
          let retailer= info.product_lowest_price;
          let plist= info.stores;
          for (var i = 0;i<plist.length;i++){
              console.log(plist[i]);
              $('.Products').append(
                  `<div class = "card">
            <div class="card-image">
              <img class = "prod_img" src="${imag}">
            </div>
            <div class="card-content">
              <span class="card-title black-text">${nem}</span>
              <p><i class="material-icons">add</i>n</p> <h2 class = "retailer">${retailer}</h2>
              <button>add to cart</button>
           
          </div>`
              )
          }
          $('.Products').append(
            `<div class = "card">
            <div class="card-image">
              <img class = "prod_img" src="${imag}">
            </div>
            <div class="card-content">
              <span class="card-title black-text">${nem}</span>
              <p><i class="material-icons">add</i>${price}</p> <h2 class = "retailer">${retailer}</h2>
           
          </div>`
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