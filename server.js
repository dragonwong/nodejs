var http = require('http'),
	url = require('url');

function start(route, handle){
	http.createServer(function(request, response){
		
		var	parsed_url = url.parse(request.url);

		//传递给route
		route(handle, parsed_url.pathname);

		response.writeHead(200, {
			'Content-Type': 'text/plain'
		});
		response.write('hello world');
		response.end();

	}).listen(8888, '127.0.0.1');

	console.log('server start!');	
}

exports.start = start;