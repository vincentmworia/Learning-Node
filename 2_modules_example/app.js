const Logger = require('./logger.js');
const logger = new Logger();

logger.on('messageLogged',(url)=>{
    console.log('Listener Data with message: ', url);
});

logger.log('message');