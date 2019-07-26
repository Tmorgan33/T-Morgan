var http = require("http");
var url = require('url');
var fs = require("fs");

exports.server = function () {
	http.createServer(function (request, response) {

		var parUrl = url.parse(request.url, true);
        var filePath = '.' + parUrl.pathname;
        
		if (ParUrl.pathname == './') {
			fs.readFile(db.txt, function (err, content){
				res.writeHead(200, {'Content-Type': "text/html"});
				res.end(content);
			}
		)}

		else if (parUrl.pathname === ('/db.js')){
			fs.readreadFile(db.txt, function(err, content){
				res.writeHead(200, {'content-Type': "text/html"});
				res.end(content);
			}
		)}
		server.listen(8080, function () {
		console.log("Listening on Port: "+ 8080);
		}
	)}
)}