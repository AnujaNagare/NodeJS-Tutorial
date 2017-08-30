// print Hello World
console.log('Hello World !');

// create a variable
var person = {
	firstName : "Anuja",
	lastName : "Nagare",
	age : 30
};

// print created variable
console.log(person)

// create a function
function addition(a,b){
	return a+b
}

// call created function and display output
console.log(addition(3,4))

// setting variable to anonymous function
var printHello = function(){
	console.log('Hello to all !');
};

// call anonymous function
printHello()

//using setTimeout function
setTimeout(printHello, 5000)
