//any i/o operations are call back functions using promise and process.next tick happen settimout will come first then setimmediate
//when nothing is there setimmediate will first

//stored in 1st phase of event loop => expire timers
// setTimeout(() => {
//   console.log("setTimeout");
// }, 0); //3

//stored in 3 phase of event loop => setimmediate
// setImmediate(() => {
//   console.log("setImmediate");
// }); //4

//microtask queue
// Promise.resolve().then(() => {
//   console.log("Promise then");
// }); //2

// process.nextTick(() => {
//   console.log("process.nextTick");
// }); //1
// ======================================

//firt phase
// setTimeout(() => {
//   console.log("setTimeout");
// }, 0); //2

//3rd phase
// setImmediate(() => {
//   console.log("setImmediate");
// }); //3

// process.nextTick(() => {
//   console.log("process.nextTick");
// }); //1
// =======================================

// //1st pahse but callback
// setTimeout(() => {
//   console.log("setTimeout");
// }, 0); //2

// //3rd phase immediate expire so first o/p
// setImmediate(() => {
//   console.log("setImmediate");
// }); //1

// ===========================================

const fs = require("fs");

console.log("check"); //0
setTimeout(() => {
  console.log("setTimeout");
}, 0); //3

//stored in 3 phase of event loop => setimmediate
setImmediate(() => {
  console.log("setImmediate");
}); //4

fs.readFile("./Files/input.txt", (err, data) => {
  console.log("fiesystem");
}); //5

//microtask queue
Promise.resolve().then(() => {
  console.log("Promise then");
}); //2

process.nextTick(() => {
  console.log("process.nextTick");
}); //1
