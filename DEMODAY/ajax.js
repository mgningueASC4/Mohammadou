

// Converts ruppees into Dollars
let Convert = (price, cvr) => {
    price = Math.floor(price/cvr)
    return price;
}

// add to cart function
var shoppingCart =[];
let totalprice =0;
function addtocart(product,money,image){
    shoppingCart.push(product);
 // new console.log
    console.log("+image "+image);
 // new #shoplist
    $("#shoplist").append(`<tr><td><img class ='pimage' src ='${image}'</td><td>${product}</td><td>$${money}</td></tr>`);
  // total price stuff (all 3 lines)
    totalprice+=money;
   console.log(totalprice);
   $('.totalprice').empty().append(`
    <h3> Total: ${totalprice}</h3>`);
    $('#shoppingcartlist').show();
}   

function setup(){
  $('#shoppingcartlist').hide();
  $('.entireurchase').hide();
    $("#searching").submit(function(e){
        e.preventDefault();
        search();
    })

    $('#pay').click(function(e) {
        alert("Thank you for your purchase!");
        $('#shoplist').empty();
    })
      $('#ode').click(function(e){
        $('.entireurchase').show();
      })
}

function search(){
    $('.Products').empty();
    var search = $("#searchbar").val();
    console.log(search);
    productName=$("#searchbar").val();
    prodName = encodeURI(productName);
    console.log(prodName);
    const apiKey = "TLHyGyOHvYVRxIeEgubFti0thQPGSMLHeeU";
    $.getJSON(
      `https://price-api.datayuge.com/api/v1/compare/search?product=${prodName}&api_key=${apiKey}`,
      function(data) {
            let info = data.data;
            console.log(info);
          for (var val of info ){
            let lowest_price = val.product_lowest_price;
            lowest_price= Convert(lowest_price, 64.17)
            console.log(lowest_price);
            // if (val.product_category === "mobile" && val.product_sub_category ==="mobile"){
            let id = val.product_id//gets id used in second url for getting store info
            $.getJSON(
              `https://price-api.datayuge.com/api/v1/compare/detail?id=${id}&api_key=${apiKey}`,

              function(data){
                let retInfo = data.data;//new info, previous info + retailers
                let imag = retInfo.product_images[0]//image
                console.log(retInfo);
                let nem = retInfo.product_name;
                let retailers = retInfo.stores;//store choice
                console.log(retailers);
                for (var store of retailers){//loops through all stores
                  for (nom in store){
                    if(Object.keys(store[nom]).length>0){//checks if sold by that retailer (if retailer info is present in the array)
                    // WHERE TO ADD IF UNDER SAME PROD_ID, WANT TO BE IN ONE BOX, NOT MANY SEPARATE PROD, THEN FIND CHEAPEST)
                      // console.log(store);
                      console.log(lowest_price);
                console.log(typeof(lowest_price));
      
                    let logo = store[nom].product_store_logo;
                    let atStore = store[nom].product_store_url 
                     let price = Number(store[nom].product_price);//price of each object
                     console.log(price);
                     price = Convert(price, 64.17);
                     console.log(price);
                     if(lowest_price === price){
                        $('.Products').append(
                            `<section>
                            <div class = "card">
                              <p><span class="new badge" data-badge-caption="LOWEST PRICE"></span></p>
                              <div class="card-image">
                                <img class = "prod_img" src="${imag}">
                              </div>
                              <div class="card-content">
                                <p><span class="card-title black-text">${nem}</span></p>
                                <p><span class="card-title black-text">${nom}</span></p>
                                <a href=${atStore}><img src=${logo} class="logo"></a>
                                <p>$${price}</p>
      
                                 <p><i class="material-icons">add</i></p> 
                                 <a onclick="addtocart('${nem}',${price},'${imag}')" class="waves-effect waves-light btn"><i class="material-icons left">add_shopping_cart</i>ADD TO CART</a>
                              </div>
                            </div>
                            </section>`
                          )
                      }
                      else{
                        $('.Products').append(
                            `<div class = "card">
                              <div class="card-image">
                                <img class = "prod_img" src="${imag}">
                              </div>
                              <div class="card-content">
                                <p><span class="card-title black-text">${nem}</span></p>
                                <p><span class="card-title black-text">${nom}</span></p>
                                <a href=${atStore}><img src=${logo} class="logo"></a>
                                <p>$${price}</p>
                                 <p><i class="material-icons">add</i></p> 
                                 <a onclick="addtocart('${nem}',${price},'${imag}')" class="waves-effect waves-light btn"><i class="material-icons left">add_shopping_cart</i>add to cart</a>
                              </div>
                            </div>
                            </section>`
                          )
                      }
                    }
                  }
                }
              }
            )
            // let nem = inf.product_title;
            // let price = inf.product_lowest_price;
            // let imag = inf.product_image;
            
            // }
        }
      }
    )
  function checkout(){

  }
}
	$(document).ready(function(){
      $('.carousel').carousel();
    });
$(document).ready(setup);
