// LESSON 1
var http = require('http');

http.createServer(function(request, response) {
  response.writeHead(200);
  response.write("Hello, this is Manny");
  response.end();
  
}).listen(8080);

//examples 1
var fs = require('fs');

fs.readFile('index.html', function(error, contents) {
 console.log(contents); 
});

//examples 2
var http = require('http');
var fs = require('fs');

http.createServer(function(request, response) {
  response.writeHead(200);
  fs.readFile('index.html', function(error, contents) {
  response.write(contents); 
     response.end();
  });


}).listen(8080);

//example 3
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

//example 4
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

// LESSON 3 STREAMS
var fs = require('fs');
var file = fs.createReadStream('fruits.txt');
file.on('readable', function() {
 var chunk;
  while(null !== (chuck = file.read())) {
   console.log(chuck.toString());
  }
});

//CONT
var fs = require('fs');

var file = fs.createReadStream('fruits.txt');

file.pipe(process.stdout);

//LESSON 4 MODULES
var warn = function(message) {
  console.log("Warning: " + message);
};

var info = function(message) {
  console.log("Info: " + message);
};

var error = function(message) {
  console.log("Error: " + message);
};
module.exports.warn = warn;
module.exports.info = info;
module.exports.error = error;

// Dependecy
{
  "name": "My Awesome Node App",
  "version": "1",
  "dependencies": {
   "connect": "2.1.1",
   "underscore": "1.3.3"
  }
}