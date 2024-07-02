// Importing the module
const readline = require("readline-sync");
var _ = require('underscore');


console.log("Select any value: ");
// Enter the number
let value = Number(readline.question());
var result = _.contains([1,2,3,4,5,6,7,8],value)

console.log(result);