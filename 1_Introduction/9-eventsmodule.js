const EventEmitter = require('events');
const emitter = new EventEmitter();
 
var count = 0

function isEven(n) {
    return n % 2 == 0;
 }

// Register a listener
emitter.on('Even Count', ()=>{
    console.log(`Even Count! ${count}`);
});

// Register a listener
emitter.on('Odd Count', function(){
    console.log(`Odd Count! ${count}`);
});

// Raise a periodic event
global.setInterval(()=>{
    if (isEven(count)){
        emitter.emit('Even Count');        
    }
    else if (!(isEven(count))){
        emitter.emit('Odd Count');        
    }
    else{
        console.log('Impossible');
    }
    count++;
}, 2000);