// Lesson 1
npm install express@4.9

//Locations
var express = require('express'); 
var app = express();
app.get('/locations', function (request, response) {
  var cities = ['Caspiana', 'Indigo', 'Paradise'];
  response.send(cities);
  
}).listen(3001, function() {
  console.log("Running Express");
});
// Changing ROUTes
var express = require('express');
var app = express();

app.get('/cities', function (request, response) {                                                                                                     
  var cities = ['Caspiana', 'Indigo', 'Paradise'];
  response.send(cities);
});
app.get('/locations', function(request, response) {
  response.redirect(301, '/cities');
});

app.listen(3001, function () {
  console.log("Running Express");
});

//MIDDLEWARE
app.use(logger);

express-static //Default Middlware
var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/cities', function(req, res){
  var cities = ['Lotopia', 'Caspiana', 'Indigo'];
  res.send(cities);
});

app.listen(3001);
// Script Tags
$(function(){

  $.get('/cities', appendToList); 

  function appendToList(cities) {
    var list = [];
    for(var i in cities){
      list.push($('<li>', { text: cities[i] }));
    }
    $('.city-list').append(list);
  }
});
  //Writing our own Middleware
module.exports = function (request, response, next) {
  var startTime = +new Date();
  var stream = process.stdout;
  var duration = null;

  response.on('finish', function () {
    duration = +new Date() - startTime;
    stream.write("This request took " + duration + " ms");
  });
    next();
};
// GET
module.exports = function(request, response, next) {
  if (request.method === 'GET') {
    next();
  } else {
    response.end("Method is not allowed");
  }
};

// Lesson 3 SEARCH
ar app = express();

var cities = ['Caspiana', 'Indigo', 'Paradise'];
app.get('/cities', function(request, response) {
  if(request.query.search) {
    response.json(citySearch(request.query.search));
  }
}); 
// City INFO
app.get('/cities/:name', function (request, response) {
  var cityInfo = cities[request.params.name];
  if(cityInfo) {
    response.json(cityInfo);
  } else {
    response.status(404).json("City not found");
  }
});
// Dynamic Routes
app.param();


app.param('name', function(request, response, next) {
  request.cityName = parseCityName(request.params.name);
  next();
});

// Routes 3
app.param('year', function(request, response, next) {
  if(isYearFormat(request.params.year)) {
    next();
  } else {
    response.status(400).json("Invalid format for Year");
  }
});