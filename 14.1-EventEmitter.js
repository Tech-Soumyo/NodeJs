const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", (name, id) => {
  console.log(`data recived user ${name} with Id ${id}`);
});
customEmitter.on("response", () => {
  console.log(`Some Other logic is here`);
});

customEmitter.emit("response", "jhon", 34);  
