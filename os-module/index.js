const os = require("os");
console.log(os.arch());
console.log(os.platform());
console.log(os.type());
console.log(os.release());
console.log(`System Uptime: ${os.uptime()} seconds`);
console.log(`Total Memory: ${os.totalmem()} bytes`);
console.log(`Free Memory: ${os.freemem()} bytes`);
console.log(os.cpus());
console.log(os.networkInterfaces());
console.log(os.homedir());
console.log(os.tmpdir());
console.log(os.constants);
console.log(`Operating System: ${os.type()}`);
console.log(`Platform: ${os.platform()}`);
console.log(`Release: ${os.release()}`);
console.log(`CPU Architecture: ${os.arch()}`);
console.log(`Number of CPUs: ${os.cpus().length}`);
console.log(`Total Memory: ${(os.totalmem() / 1024 ** 3).toFixed(2)} GB`);
console.log(`Free Memory: ${(os.freemem() / 1024 ** 3).toFixed(2)} GB`);
console.log(`Uptime: ${(os.uptime() / 3600).toFixed(2)} hours`);

setInterval(() => {
  const freeMem = os.freemem();
  const totalMem = os.totalmem();
  const usedMem = totalMem - freeMem;
  console.log(`Memory Usage: ${((usedMem / totalMem) * 100).toFixed(2)}%`);
}, 5000);

const networkInterfaces = os.networkInterfaces();
console.log("Network Interfaces:", networkInterfaces);

const cpus = os.cpus();
cpus.forEach((cpu, index) => {
  console.log(`CPU ${index + 1}:`);
  console.log(`   Model: ${cpu.model}`);
  console.log(`   Speed: ${cpu.speed} MHz`);
});
