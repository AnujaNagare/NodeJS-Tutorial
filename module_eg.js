// new .js file can be called as module

//use require keyword to import a module from different file
var movies = require('./movies');

console.log("Prints content from module : method 1")
movies.avatar();


console.log("Prints content from module : method 2")
var movies1 = require('./movies1');

movies1.printAvatar();

console.log(movies1.favMovie);


