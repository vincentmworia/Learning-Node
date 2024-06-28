// Listen to when someone logs in and return user info.

const LogEmitter = require('./logger2.js'); 
const logEmitterInstance = new LogEmitter();

logEmitterInstance.on('loginSuccessful', function(){
    console.log('Login successful detected at app2');
});

logEmitterInstance.login();
