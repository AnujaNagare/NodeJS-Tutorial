var Ram ={
	favFood:"Samosa",
	favMovie: "3 Idiots"
};


var Person = Ram;
Person.favFood = "salad";

console.log(Ram.favFood)

console.log(19 == '19'); //prints true as it only compare the values

console.log(19 === '19'); //prints false as it compare the values and types


// this keyword
var Shyam = {
	printFirstName: function(){
		console.log("My name is Shyam");
		console.log(this === Shyam);
	}
};

Shyam.printFirstName();

// default calling context is global
function doSomethingWorthless(){
	console.log("\nI am Worthless");
	console.log(this === global);
}

doSomethingWorthless()