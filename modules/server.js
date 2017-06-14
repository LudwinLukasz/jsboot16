var http = require('http');
var colors = require('colors');
var handlers = require('./handlers');

function start() {
	function onRequest(request, response) {
		console.log("Odebrano zapytanie.");
		console.log("zapytanie " + request.url + " odebrane");
		response.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"});
		// czy request.url bierze sie z http ?
		switch (request.url) {
			case '/':
			case'/start':
				handlers.welcome(request,response);
				break;
			case'/upload':
				handlers.upload(request,response);
				break;
			case '/show':
				handlers.show(request, response);
				break;
			case '/css':
				handlers.css(request, response);
				break;
			default:
				handlers.error(request,response);
		}
	}

	http.createServer(onRequest).listen(9000);

	console.log("Uruchomiono serwer!".green);
}

exports.start = start;