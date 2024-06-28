const  EventEmitter = require("events");

// create a function and emit a message.
const appUrl = 'https://electric.mworia.ac.ke';

class Logger extends EventEmitter{
    log(message){
        console.log(message);
        this.emit('messageLogged', appUrl);
    }
}

module.exports = Logger;