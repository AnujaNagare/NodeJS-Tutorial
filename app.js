var path = require('path');
var websiteHome = "/Users/anujanagare/Desktop/NodeJS Tut//thenewboston/index.html";
var websiteAbout = "/Users/anujanagare/Desktop/NodeJS Tut//thenewboston/about.html";


console.log(path.normalize(websiteHome));
console.log(path.dirname(websiteAbout));
console.log(path.basename(websiteAbout));
console.log(path.extname(websiteAbout))
