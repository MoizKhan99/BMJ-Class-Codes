// npm, http, fs, path
// import abc from "xyz"; // es6 -> babel
// var path = require("path");//
// console.log("Path: ", path.join(__dirname, 'abc', 'xyz.js'))

const http = require("http");

function server (request, response) {
  console.log(request.url);
  // status code
  // 200 - OK
  // 300 - moved /abc -> /xyz
  // 400 - validation error - 401 - 404
  // 500 - server error

  // content type
  // html page, css file, image, text, json

  // content

  // res.header('Content-Type', '')
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  if(request.url === "/") {
    response.end('<h1>Hello World!</h1>');
  } else if(request.url === "/abc" && request.method === "GET") {
    response.end('Hello Abc!');
  }

  // setTimeout(function () {
    response.end('Not Found!');
  // }, 5000);

}
const myServer = http.createServer(server);
myServer.listen(8080);

// const reducer = function(state, action){ }
// createStore(reducer);