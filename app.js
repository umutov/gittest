/*var request = require('request');
var adres = "http://ip-api.com/json";
//request(adres, function (error, response, body) {
request({url: adres, json: true}, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    //console.log(response); // Show the HTML for the Google homepage.
    console.log(body);
    console.log(body.city);
  }
});
*/
//var ex = require("./location-callback.js");

/*var ex = require("./location.js");
ex().then(function (location) {
    console.log("City: " + location.city + " (timestamp: " + new Date().getTime() + ")");
},
   function (error) {
    console.log("Hata");
} );
console.log("test: " + new Date().getTime());
*/


/* Hava Durumu Örnek1
var fnc_location = require("./location.js");
var fnc_weather = require("./weather.js");

fnc_location().then(function (locArray) {
    console.log(locArray.city);
fnc_weather(locArray.city).then(function (weatherJSON) {
    console.log(weatherJSON.main.temp);
},
   function (error) {
    console.log("Hava Durumu Hata: " + error);
} );
},
   function (error) {
    console.log("Bölge Hata: " + error);
} );
*/

// Hava Durumu Örnek2
var location = require("./location.js");
var weather = require("./weather.js");
/*var city = '';

location().then(
    function (locArray) {
        city = locArray.city
        console.log(city);
        return weather(city);
    },
    function (error) {
        weather("Ankara");
    }).then(function (body) {
    console.log(body.main.temp);
},
            function (error) {
    console.log("Hata: " + error);
}
           );
*/

// Hava Durumu Örnek3
var argv = require('yargs')
			.option('location',  {
						demand : false,
						alias : 'l',
						description : 'Location name',
						type : 'string'
					}
				)
			.help('help')
			.argv;

weather(argv.location).then(function(body) {
		console.log(argv.location);
		console.log(body.main.temp);
	}, function(error) {
		console.log("Error: " + error);
		return location();
	}
).then(function(body) {
		console.log(body.city);
		return weather(body.city);
	}
).then(function(body) {
		console.log(body.main.temp);
	}
);