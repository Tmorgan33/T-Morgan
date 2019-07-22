var http = require("http");
var url = require('url');
var fs = require("fs");

exports.server = function () {
	http.createServer(function (request, response) {

		var parUrl = url.parse(request.url, true);
        var filePath = '.' + parUrl.pathname;
        
    if (filePath == './') {
        filePath = './index.html';
		} else {
			filePath += ".html";
		}

		console.log('request ', request.url);

		fs.readFile(filePath, function (err, content) {
		
			if(request.url === "/" || request.url === "/index.html") {
				response.writeHead(200, { 'Content-Type': "text/html" });
				response.end(content, 'utf-8');

			} else {
				fs.readFile('./404.html', function(error, content) {
					response.writeHead(404, { 'Content-Type': "text/html" });
					response.end(content, 'utf-8');
				});
			}
		})
	})
    .listen(8080, function () {
        console.log("Listening on Port: "+ 8080);
    });
}