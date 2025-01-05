// Import EventEmitter class
const EventEmitter = require("events");
// Create an instance of EventEmitter
const emitter = new EventEmitter();




// 1. Define an event listener (addListener)
emitter.on("greet", () => {
  console.log(`hello uzair`);
});



// // 2. Trigger (emit) the "greet" event
emitter.emit("greet");



//* You can also pass arguments while emitting.

emitter.on("greet", (username) => {
  console.log(`hello ${username}`);
});
// 2. Trigger (emit) the "greet" event
emitter.emit("greet", "Uzair", "Full Stack Dev");



emitter.on("greet", (username, profression) => {
  console.log(`hello ${username}, You are a ${profression}, ri8`);
});
// 2. Trigger (emit) the "greet" event
emitter.emit("greet", "Uzair", "Full Stack Dev");



//! but it's best idea to take a single argument as an object.

emitter.on("greet", (arg) => {
  console.log(`hello ${arg.username}, You are a ${arg.profression}`);
});
// 2. Trigger (emit) the "greet" event
emitter.emit("greet", { username: "Uzair", profression: "Full Stack Dev" });













// First listener
emitter.on('event', function firstListener() {
  console.log('Helloooo! first listener');
});
// Second listener
emitter.on('event', function secondListener(arg1, arg2) {
  console.log(`event with parameters ${arg1}, ${arg2} in second listener`);
});
// Third listener
emitter.on('event', function thirdListener(...args) {
  const parameters = args.join(', ');
  console.log(`event with parameters ${parameters} in third listener`);
});

console.log(emitter.listeners('event'));

emitter.emit('event', 1, 2, 3, 4, 5);

// Prints:
// [
//   [Function: firstListener],
//   [Function: secondListener],
//   [Function: thirdListener]
// ]
// Helloooo! first listener
// event with parameters 1, 2 in second listener
// event with parameters 1, 2, 3, 4, 5 in third listener
