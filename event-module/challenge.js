//? Challenge: "Event Maestro: Handle It All!"

//! Objective
//* Create a program using Node.js EventEmitter that:

//? Listens for multiple types of user events (e.g., login, logout, purchase, and profile update).
//? Tracks how many times each event is emitted.
//? Logs a summary of all event occurrences when a special summary event is triggered.

//! Requirements
//? Create at least four custom events (e.g., user-login, user-logout, user-purchase, profile-update).
//? Emit these events multiple times with different arguments (e.g., username, item purchased).
//? Track and store the count of each event type.
//? Define a summary event that logs a detailed report of how many times each event was triggered.

const EventEmitter = require("events");

const emitter = new EventEmitter();

const eventCounts = {
  userlogin: 0,
  userlogout: 0,
  userpurchase: 0,
  profileupdate: 0,
};






// Event listeners
emitter.on("userlogin", (username) => {
  eventCounts.userlogin++
  console.log(`${username} logged in!`);
});

emitter.on("userpurchase", (username, item) => {
  eventCounts.userpurchase++
  console.log(`${username} purchased ${item}!`);
});

emitter.on("profileupdate", (username, field) => {
  eventCounts.profileupdate++
  console.log(`${username} updated their ${field}!`);
});

emitter.on("userlogout", (username) => {
  eventCounts.userlogout++
  console.log(`${username} logged out!`);
});
emitter.on("userlogout", (username) => {
  eventCounts.userlogout++
  console.log(`${username} logged out!`);
});

emitter.on("summary", () => {
  console.log(eventCounts);
});




// Emit some events
emitter.emit("userlogin", "uzair");
emitter.emit("userpurchase", "uzair", "Laptop");
emitter.emit("profileupdate", "uzair", "email");
emitter.emit("userlogout", "uzair");

// Show the summary
emitter.emit("summary");