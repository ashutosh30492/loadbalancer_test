var http = require('http'),
    httpProxy = require('http-proxy');

//
// Create a proxy server with custom application logic
//

var address = ["http://www.google.com", "http://www.flipkart.com", "http://stayzilla.com", "http://photosapi.qa.stayzilla.com/pictures/hotel"];

/**
 *This function generates random integer between two numbers low (inclusive) and high (exclusive) ([low, high))
 * @param low
 * @param high
 * @returns {number}
 */
function randomInt (low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}

var proxy = httpProxy.createProxyServer({});

var server = http.createServer(function(req, res) {

    var target = address[randomInt(0, address.length)];

    delete req.headers.host;
    console.log("Redirected to : " + target);
    proxy.web(req, res, {
        target: target
    });
});

console.log("listening on port 5050");
server.listen(5050);