//create a simple server

const fs = require("fs");
const http = require("http");
const replaceHTML = require("./Modules/replaceHTML");

const data = fs.readFileSync("./Files/index.html", "utf-8");
const server = http.createServer((request, response) => {
  let path = request.url; // routing with native html node js without express

  if (path.toLowerCase() === "/contact") {
    response.end(data.replace("{{%CONTENT%}}", "you are in contact page"));
  } else {
    response.end(data);
  }

  console.log("server is created");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("server is connected successfully");
});
