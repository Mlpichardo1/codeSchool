// examples 1
var http = require('http');

http.createServer(function(request, response) {
  response.writeHead(200);
  response.write("Hello, this is Manny");
  response.end();
  
}).listen(8080);

//examples 2
var fs = require('fs');

fs.readFile('index.html', function(error, contents) {
 console.log(contents); 
});

//examples 3
var http = require('http');
var fs = require('fs');

http.createServer(function(request, response) {
  response.writeHead(200);
  fs.readFile('index.html', function(error, contents) {
  response.write(contents); 
     response.end();
  });


}).listen(8080);

//example 4
var http = require('http');
var fs = require('fs');

http.createServer(function(request, response) {
  response.writeHead(200,{
    "Content-Type": 'text/html' 
  });

  fs.readFile('index.html', function(err, contents) {
    response.write(contents);
    response.end();
  });

}).listen(8080);

//example 5
var http = require('http');

http.createServer(function(request, response) {
  response.writeHead(200);

  response.end("Hello, this is dog");
}).listen(8080);

// LESSON 2 EXAMPLES
var events = require('events');
var EventEmitter = events.EventEmitter;
var chat = new EventEmitter();
chat.on('message', function(message) {
  console.log(message);
});

//CONT
var events = require('events');
var EventEmitter = events.EventEmitter;

var chat = new EventEmitter();
var users = [], chatlog = [];

chat.on('message', function(message) {
  chatlog.push(message);
});

chat.on('join', function(nickname) {
  users.push(nickname);
});

// Emit events here
chat.emit('join', "Manny");
chat.emit('message', 'hi');

//CONT...
var http = require('http');
var server = http.createServer();

server.on('request', function(request, response) {
  response.writeHead(200);
  response.write("Hello, this is dog");
  response.end();
});

server.on('request', function(request, response) {
  console.log("New request coming in...");
});

server.on('close', function() {
  console.log("Closing down the server...");
});

server.listen(8080);

