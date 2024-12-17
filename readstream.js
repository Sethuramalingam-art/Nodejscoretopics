//streams in nodejs
const http = require("http");
const fs = require("fs");

const server = http.createServer();

server.listen(8000, "127.0.0.1", () => {
  console.log("server started");
});

server.on("request", (req, res) => {
  // normal read method
  // fs.readFile("./Files/large-files.txt", "utf-8", (err, data) => {
  //   if (err) {
  //     res.end(err);
  //   }
  //   res.end(data);
  // });

  //data and end are two main methods for readstreams method
  // let rs = fs.createReadStream("./Files/large-files.txt");
  // rs.on("data", (chunk) => {
  //   res.write(chunk);
  // });

  // res.on("end", () => {
  //   res.end();
  // });

  // rs.on("error", (error) => {
  //   res.end(error.message);
  // });

  //pipe method
  let rs = fs.createReadStream("./Files/large-files.txt");
  rs.pipe(res);
});
