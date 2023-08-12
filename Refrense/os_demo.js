const os = require('os');

// plateform 
console.log(os.platform())
console.log(os.arch())
// console.log(os.cpus())

// free memory 

console.log(os.freemem())
console.log(os.totalmem())

console.log(os.uptime())