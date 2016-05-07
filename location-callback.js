var request = require('request');
var adres = "http://ip-api.com/json";
//request(adres, function (error, response, body) {
module.exports = function (callback) {
    request({url: adres, json: true}, function (error, response, body) {
          if (!error && response.statusCode == 200) {
            //console.log(response); // Show the HTML for the Google homepage.
            //console.log(body);
            //console.log(body.city);
              callback(body.city);
          }
    });
}
