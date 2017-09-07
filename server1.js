// using connect
var http = require('http');
var connect = require('connect');

var app = connect();

function doFirst(request, respose, next){
	console.log("Hello !")
	next();
}

function doSecond(request, respose, next){
	console.log("Bye !")

}

app.use(doFirst);
app.use(doSecond);


http.createServer(app).listen(8000);
console.log("Server is now running.....")

