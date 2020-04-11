var http = require('http');
var server = http.createServer(function(requst,response){

    response.writeHead(200,{"Content-Type":"text/html"});
    response.end("<html><body><h1>Hello world!!</h1></body></html>");
});

var port = process.env.port|| 1337;
server.listen(port);

console.log("server running at http://localhost:%d",port);