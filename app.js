//Lets require/import the HTTP module
var http = require('http'),
    request = require('request'),
    _ = require('lodash');

//Lets define a port we want to listen to
const PORT=5000;

//We need a function which handles requests and send response
function handleRequest(req, response){

    console.log(req);


    console.log(req.method);
    console.log(req.params);
    console.log(req.body);
    console.log(req.query);
    var requestOptions = {
        method : req.method,
        url : "http://www.google.com/"
    };
    req.url = 'http://www.google.com';

    request(req, function(err, res, body) {
        if (err) {
            throw err;
        }
        response.end(body);
    });



    //response.end('It Works!! Path Hit: ' + request.url);
}

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});