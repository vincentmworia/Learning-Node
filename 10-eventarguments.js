const Event = require('events')
const objEmitter = new Event();

objEmitter.on('connection',(data)=>{
    const {connStatus} = data;
    console.log(`Connected. Status code ${data.connStatus}`);
});


setTimeout(()=>{
    objEmitter.emit('connection', {connStatus: 200});
}, 3000);
