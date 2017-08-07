var YOUR_ID="9ed99bbd";
var YOUR_KEY="2a5ac146bb8893d80d2bb5be40aa562f";
var MacDo ="https://api.nutritionix.com/v1_1/search/mcdonalds?results=0:50&fields=item_name,brand_name,item_id,nf_calories,nf_total_fat&appId=" + YOUR_ID + "&appKey=" + YOUR_KEY;

var keyword;
  google.load('search', '1');
    google.setOnLoadCallback(OnLoad);
    var search;

    //i suggest instead of this to make keywords list so first to pick random keyword than to do search and pick random image

    function OnLoad()
    {
        search = new google.search.ImageSearch();

        search.setSearchCompleteCallback(this, searchComplete, null);

        search.execute(keyword);
    }

    function searchComplete()
    {
        if (search.results && search.results.length > 0)
        {
            var rnd = Math.floor(Math.random() * search.results.length);

            //you will probably use jQuery and something like: $('body').css('background-image', "url('" + search.results[rnd]['url'] + "')");
            ('body').append("<img src='" + search.results[rnd]['url'] + "'>")
        }
    }

$.ajax(
    
    {
        url: MacDo,
        success: function(data){
            var rand_food = Math.floor(Math.random()*data.hits.length)
            var food= data.hits[rand_food];
            var name = food.fields.item_name;
            keyword = name;
            alert("Keyword defined!");
            var cals = food.fields.nf_calories;
            $("body").append("<h4> This " + name + " has " + cals + "kcal !!!</h4>");
            //getPic();
        }
    }
)

/*function getPic(){
     $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?",
        {
            tags: keyword,
            kick: alert(keyword),
            tagmode: "any",
            format: "json"
        },
     function(data) {
            var rnd = Math.floor(Math.random() * data.items.length);
            var image_src = data.items[rnd]['media']['m'].replace("_m", "_b");

            $('body').append("<img  src=" + image_src + ">");

        });
}
*/


