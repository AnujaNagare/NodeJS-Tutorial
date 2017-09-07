// simple web server
var http = require('http');
var fs = require('fs');

// 404 response
function send404Response(response){
	
	response.writeHead(404, {"Content-Type": "text/plain"});
	response.write("Error 404: Page not found");
	response.end()
}

// handle a user request 
function onRequest(request, response){
	if (request.method = 'GET' && request.url == '/'){
		response.writeHead(200, {"Content-Type": "text/html"});
		fs.createReadStream("./index.html").pipe(response);
		// response.end()
	}
	else
	{
		send404Response(response);
	}

}


http.createServer(onRequest).listen(8000);
console.log("Server is now running.....")

