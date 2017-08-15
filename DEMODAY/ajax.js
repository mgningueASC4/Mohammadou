function setup(){
  
    $("#searching").submit(function(e){
        e.preventDefault();
        search()
    })

}

function search(){
    // productName="Samsung";
    // $.getJSON("https://price-api.datayuge.com/api/v1/compare/?apikey=RzQF3I2gTT7N4iWvBO3SKc1MUhy3t0JiGKZ&product="+productName,
        
    //     function(data) {
    //         console.log(data);
            
    //     });
    $('.Products').empty();
    var search = $("#searchbar").val();
    console.log(search);
    productName=$("#searchbar").val();
    prodName = encodeURI(productName)
    console.log(prodName);
    const apiKey = "TLHyGyOHvYVRxIeEgubFti0thQPGSMLHeeU";
    $.getJSON(
      `https://price-api.datayuge.com/api/v1/compare/search?product=${prodName}&api_key=${apiKey}`,
      function(data) {
            let info = data.data;
            console.log(info);
          for (var val of info ){
            let lowest_price = val.product_lowest_price;
            // console.log(lowest_price);
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
                    // console.log(store);
                     let price = store[nom].product_price;//price of each object
                     console.log(price);
                    //  if(lowest_price == price){
                        $('.Products').append(
                            `<section>
                            <div class = "card">
                              <div class="card-image">
                                <img class = "prod_img" src="${imag}">
                              </div>
                              <div class="card-content">
                                <p><span class="card-title black-text">${nem}</span></p>
                                <p><span class="card-title black-text">${nom}</span></p>
                                <p>₹${price}</p>
                              </div>
                            </div>
                            </section>`
                          )
                      // }
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
}

$(document).ready(setup);
