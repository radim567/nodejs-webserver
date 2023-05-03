const os = require('os');

const architecture = os.arch();
console.log(architecture);

// Platform
console.log(`1. Platform: ${os.platform()}`);

// CPU Architecture
console.log(`2. CPU: ${os.arch()}`);
console.log(`2b. Machine: ${os.machine()}`);

// CPU Core
/* console.log(`3. Cores: ${JSON.stringify(os.cpus())}`);
console.log(`3c. Cores listing:`);
console.log(os.cpus()); */

console.log(
  `Free memory: ${(os.freemem() / 1024 / 1024 / 1024).toFixed(2)} GB`
);

console.log(
  `Total memory: ${(os.totalmem() / 1024 / 1024 / 1024).toFixed(2)} GB`
);

console.log(os.hostname());
console.log(os.loadavg());
console.log(os.release());
console.log(os.tmpdir());
console.log(os.release());
