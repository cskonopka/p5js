// // The file system module
// var fs = require('fs');

// function handleRequest(request, response) {
//   // User file system module to read index.html file
//   fs.readFile("/Users/lv426/Documents/_ream/p5js/LV426",
//     // Callback function for reading
//     function (err, data) {
//       // if there is an error
//       if (err) {
//         response.writeHead(500);
//         return response.end('Error loading index.html');
//       }
//       // Otherwise, send the data, the contents of the file
//       response.writeHead(200);
//       response.end(data);
//     }
//   );
//   var http = require('http');

// // Create a server with the handleRequest callback
// var server = http.createServer(handleRequest);

// // Listen on port 8080
// server.listen(8080);

// console.log('Server started on port 8080');

// }

// This function handles an incoming "request"
// And sends back out a "response";
var handleRequest = function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World\n');
};

// HTTP module
var http = require('http');

// Create a server with the handleRequest callback
var server = http.createServer(handleRequest);
// Listen on port 8080
server.listen(8080);

console.log('Server started on port 8080');