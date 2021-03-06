var http = require('http'),
    httpProxy = require('http-proxy'),
    address;

//Initialise server array

address = ['http://www.google.com', 'http://www.flipkart.com', 'http://stayzilla.com'];

/**
 *This function generates random integer between two numbers low (inclusive) and high (exclusive) ([low, high))
 * @param low : lower limit of random numbers range
 * @param high : upper limit of random numbers range
 * @returns {number} : Random integer between high(exclusive) and low (inclusive)
 */
function randomInt(low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}

var proxy = httpProxy.createProxyServer({}),
    target,
    server = http.createServer(function (req, res) {
        target = address[randomInt(0, address.length)];
        delete req.headers.host;
        console.log('Redirected to : ' + target);
        proxy.web(req, res, {
            target: target
        });
    });

console.log('Load balancer listening on port 5050');
server.listen(5050);
