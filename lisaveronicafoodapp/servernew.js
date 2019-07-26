var http = require('http');
var server;

server = http.createServer(function(req,res) {
    res.setHeader('Access-Control-Allow-Origin','*'); 
console.log('request ', req.url);



res.writeHead(200, {'Content-type': 'text-plain'});

res.end('hello world\n');
});
server.listen(8080, function(){
    console.log('server is running at 8080');
});
