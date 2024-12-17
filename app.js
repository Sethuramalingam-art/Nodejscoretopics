// read a input from terminal and execute the function based on the input and write the output

//https://www.freecodecamp.org/news/node-process-object-explained/

const readLine = require("readline");
const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Please enter the name", (name) => {
  console.log(name);
  rl.close();
});

//listening the event close
rl.on("close", () => {
  console.log("interface closed");
  process.exit(1);
});

process.on("exit", (code) => {
  setTimeout(() => {
    console.log("Will not get displayed"); // it will not print because it is in on exit event emiitter
  }, 0);

  console.log("Exited with status code:", code);
});
console.log("Execution Completed");

process.stdout.write("Hello World!" + "\n"); // like console.log
// The process.exit() method instructs Node.js to terminate the process synchronously with an exit status of code. If code is omitted, exit uses either the 'success' code 0 or the value of process.exitCode if it has been set. Node.js will not terminate until all the 'exit' event listeners are called.

// To exit with a 'failure' code:

// import { exit } from 'node:process';

// exit(1);
// The shell that executed Node.js should see the exit code as 1.

// Calling process.exit() will force the process to exit as quickly as possible even if there are still asynchronous operations pending that have not yet completed fully, including I/O operations to process.stdout and process.stderr.

// In most situations, it is not actually necessary to call process.exit() explicitly. The Node.js process will exit on its own if there is no additional work pending in the event loop. The process.exitCode property can be set to tell the process which exit code to use when the process exits gracefully.

// For instance, the following example illustrates a misuse of the process.exit() method that could lead to data printed to stdout being truncated and lost:

// import { exit } from 'node:process';

// // This is an example of what *not* to do:
// if (someConditionNotMet()) {
//   printUsageToStdout();
//   exit(1);
// }
// The reason this is problematic is because writes to process.stdout in Node.js are sometimes asynchronous and may occur over multiple ticks of the Node.js event loop. Calling process.exit(), however, forces the process to exit before those additional writes to stdout can be performed.

// Rather than calling process.exit() directly, the code should set the process.exitCode and allow the process to exit naturally by avoiding scheduling any additional work for the event loop:

// import process from 'node:process';

// // How to properly set the exit code while letting
// // the process exit gracefully.
// if (someConditionNotMet()) {
//   printUsageToStdout();
//   process.exitCode = 1;
// }
// If it is necessary to terminate the Node.js process due to an error condition, throwing an uncaught error and allowing the process to terminate accordingly is safer than calling process.exit().
