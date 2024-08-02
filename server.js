var http = require('http');

var server = http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text/html'});
    response.end('<h1>Hello Node</h1>')
});
server.listen(3000,function(){
    console.log("server is running on http://localhost:3000")
});