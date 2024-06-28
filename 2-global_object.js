console.log('Global Object');
console.log(global);

// Initialization
var count = 1; 
global.console.log('Wait for 3 secs...');

// Function for counter
function displayAndIncrementCounter(){
    console.log(count);
    count+=1;
}

// Use of timers and Intervals
global.setTimeout(()=>{
    console.log('Started Counting!');
    displayAndIncrementCounter();
    
    setInterval(()=>{ 
        displayAndIncrementCounter();        
    },1000);     
},3000);