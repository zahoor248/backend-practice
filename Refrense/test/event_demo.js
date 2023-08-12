const EventEmitter = require("events");

class MyEmitter extends EventEmitter {}
// init object
const myEmitter = new MyEmitter();
myEmitter.on("event", () => console.log("event fired "));
// init
myEmitter.emit("event");
myEmitter.emit("event");

myEmitter.emit("event");

myEmitter.emit("event");
