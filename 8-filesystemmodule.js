const fs = require('fs');

// Read all the files in this folder in asynchronous.
// Use this to prevent blocking
fs.readdir('./', function(err,data){
    if(err){
        console.log('Error: ',err);
    }
    else{
        console.log('Result: ',data);
    }

});

// Read all the files in this directory in synchronous
const files = fs.readdirSync('./'); 
console.log('Synchronous:', files);
