var request = require('request');
var adres = "http://ip-api.com/json";
//request(adres, function (error, response, body) {
module.exports = function () {
    return new Promise(function (resolve, reject) {
        console.log("Func Start: " + new Date().getTime());
        request({url: adres, json: true}, function (error, response, body) {
            if (!error && response.statusCode == 200) {
                resolve(body);
            }
        });
    });
}
