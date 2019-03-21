process.stdin.setEncoding('utf-8');

var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.on('request', function (request, response) {
	response.setHeader('Content-Type', 'text/html; charset=utf-8');
	if (request.method === 'GET' && request.url === '/') {
		fs.readFile('index.html', 'utf-8', function (err, data) {
			if (err) throw err;
			response.write(data);
			response.end();
		});
	} else {
		response.statusCode = 404;
		response.write('<img src="https://www.interserver.net/tips/wp-content/uploads/2016/10/404error.jpeg" alt="404">');
		response.end();
	}
});

server.listen(8080);
