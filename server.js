var http = require('http');

var server = http.createServer(function (req, res) {
    
	console.log('Processing the request');    
    res.writeHead(200, {'Content-Type': 'text/plain; charset=UTF-8'});
    
	var rN = Math.floor((Math.random() * 100) + 1);
	res.end('' + rN);
	console.log('Random number:  ' + rN);
});

server.listen(1991, "127.0.0.1", function () {
    console.log('The server is running at: http://127.0.0.1:1991/');
});