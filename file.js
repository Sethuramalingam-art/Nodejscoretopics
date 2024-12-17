// read and write the content from file syncronously

const fs = require("fs");

const content = fs.readFileSync("./Files/input.txt"); // synchrounously once file have more content it will take time to execute next line because it is sync

process.stdout.write(content);

const data = "write this into output file";
fs.writeFileSync("./Files/output.txt", data);
