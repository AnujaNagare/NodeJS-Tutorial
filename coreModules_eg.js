// core modules
var fs = require('fs');

// creates corn.txt file in the same directory
fs.writeFileSync("corn.txt", "Corn is good, corn is life");

console.log(fs.readFileSync("corn.txt").toString());
