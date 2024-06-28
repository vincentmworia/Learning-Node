// I want to handle login details

const EventEmitter  = require("events");

class LoggingIn extends EventEmitter{
    login(){
        console.log('Login successful');
        this.emit('loginSuccessful');
    }  
}

module.exports = LoggingIn;