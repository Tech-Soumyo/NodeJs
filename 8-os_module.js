const os = require("os");

// info about current user
const user = os.userInfo();
console.log(user);
console.log(`The iystem uptime is ${os.uptime()} seconds`);

const currentos = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freemem: os.freemem(),
};
console.log(currentos);
