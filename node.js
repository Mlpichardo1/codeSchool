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

//LESSON 5 Express
var express = require('express');
var app = express();
app.get('/tweets', function(req, res) {
 res.sendFile(__dirname + "/tweets.html"); 
});
app.listen(8080);
//CONT
var express = require('express');
var app = express();
var quotes = {
  'einstein': 'Life is like riding a bicycle. To keep your balance you must keep moving',
  'berners-lee': 'The Web does not just connect machines, it connects people',
  'crockford': 'The good thing about reinventing the wheel is that you can get a round one',
  'hofstadter': 'Which statement seems more true: (1) I have a brain. (2) I am a brain.'
};

app.get('/quotes/:name', function(req, res) {
  var quote = quotes[req.params.name];
  res.render('quote.ejs', {
    name: req.params.name,
    quote: quote
  });

app.listen(8080);
//URL Building
var url = require('url');

var options = {
  protocol: "http:",
  host: "search.twitter.com",
  pathname: '/search.json',
  query: { q: "codeschool"}
};

var searchURL = url.format(options);
var request = require('request');
request(searchURL, function(err, response, body) {
console.log(body);
});
//Server 
var url = require('url');
var request = require('request');
var express = require('express');
var options = {
  protocol: "http:",
  host: "search.twitter.com",
  pathname: '/search.json',
  query: {
    q: "codeschool"
  }
};

var searchURL = url.format(options);

var app = express();
app.get('/', function(req, res) {
request(searchURL).pipe(res);
  }); // Create server here
app.listen(8080);
