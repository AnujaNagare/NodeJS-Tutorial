// using connect
var http = require('http');
var connect = require('connect');

var app = connect();

function profile(request, respose){
	console.log('User requested profile');
}

function forum(request, respose){
	console.log('User request forum');
}

app.use('/profile', profile);
app.use('/forum',forum);

http.createServer(app).listen(8000);
console.log("Server is now running.....");

