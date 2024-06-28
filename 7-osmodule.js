const {totalmem} = require('os');
const osData = require('os');

console.log(totalmem());
console.log(osData.uptime());

const freeMemory = osData.freemem();
console.log(freeMemory);

console.log(`We have ${freeMemory}bytes available free memory.`)