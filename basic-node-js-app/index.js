const http = require("http");

http
  .createServer(function (_, response) {
    console.log("request recieved");
    response.end("hello world", "utf-8");
  })
  .listen(3000);

console.log("server started");
