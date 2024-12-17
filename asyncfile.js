//read and write file asynchronously

const fs = require("fs");

//it is a callback hell

fs.readFile("./Files/input.txt", "utf-8", (err, data) => {
  fs.readFile(`./Files/${data}.txt`, "utf-8", (err1, data1) => {
    console.log(data1);
  });
});
