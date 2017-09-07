// basic server setup program
var http = require('http');

// onRequest function
function onRequest(request, response){
	console.log("A user made a request" + request.url);
	// 200 implies that the response contains a payload that represents the status of the requested resource
	response.writeHead(200, {"Context-Type": "text/plain"});
	response.write("Here is your data");
	response.end()
}

http.createServer(onRequest).listen(8000);
console.log("Server is now running.....")

