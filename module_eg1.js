// shared state of modules
require('./emily');
require('./bucky');

// it can be observed that both emily and bucky have same fav movie
// but in bucky.js file we have not assigned value to movies.favMovie 

// this is because module's default behaviour is to "share module with every other file which import's it"
// so emily changes the object in movies2.js directly and bucky accesses this object
// for performance and memory it can be efficient but not for this example
// as every user will have their own fav movies

console.log("\n------------ After object factory ------------\n")

require('./emily1');
require('./bucky1');
