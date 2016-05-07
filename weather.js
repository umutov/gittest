var request = require('request');
var url = 'http://api.openweathermap.org/data/2.5/weather?units=metric&appid=8b1d372262e9ce6e9765c1bb0dd17531';

//module.exports anahtar kelime. arkasına yazdığını callback olarak oluşturuyor.
module.exports = function(location) {
		return new Promise(function (resolve, reject) {
			if (!location) {
				return reject('no location');
			}

			var enLoc = encodeURIComponent(location);
			var urlLoc = url + '&q=' + enLoc;
			request({
				url: urlLoc
				, json: true
			}, function (error, responce, body) {
				if(error){
					reject('unable to fetch weather');
				} else {
					resolve(body);
				}
			});
		}
	)
}
