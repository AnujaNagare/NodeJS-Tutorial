var movies = require('./movies3');

// var buckysMovies = movies();
// console.log("Bucky's favorite movie is: " +  buckysMovies.favMovie);


var buckysMovies = movies();
buckysMovies.favMovie = "Good Will Hunting";
console.log("Bucky's favorite movie is: " +  buckysMovies.favMovie);
