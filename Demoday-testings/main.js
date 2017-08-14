var unirest = require('unirest');

unirest.get("https://datayuge-price-comparison-india-v1.p.mashape.com/search.php?product=Iphone+6+s")
.header("X-Mashape-Key", "zdvo8ktKzOmshXEBASdh4X6l7ZP2p1uEzX3jsnxFDZjl3zx8OM")
.header("Accept", "application/json")
.end(function (result) {
  console.log(result.status, result.headers, result.body);
});