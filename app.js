//require/import the HTTP module
var http = require('http'),
    request = require('request'),
    _ = require('lodash');

//define a port we want to listen to
const PORT=5000;

//define host addresses
//var address = ["http://localhost:25280", "http://sp-cms-service36.nm.flipkart.com:26700/sp-cms-service/spService?api=productDWL&ids=KTAE2FK9H7AFZBHX", "http://sp-cms-service36.nm.flipkart.com:26700/sp-cms-service/spService?api=productDWL&ids=BOLE9GZ6GFVT3YMK"]

var address = ["http://sherlock-app22.nm.flipkart.com:25280/sherlock/stores/tyy/4io/select?q=i%20phone"];

// This function generates random integer between two numbers low (inclusive) and high (exclusive) ([low, high))
function randomInt (low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}

//We need a function which handles requests and send response
function handleRequest(req, response){

    console.log(req);

    var rand = randomInt(0, address.length);
    console.log(rand);
    req.url = address[rand];//"http://localhost:25280"
    request(req, function(err, res, body) {
        if (err) {
            throw err;
        }
        console.log(res);
        response.end(JSON.parse(JSON.stringify(res)));
    });
}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});
