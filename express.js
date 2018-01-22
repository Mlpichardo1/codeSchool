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
var app = express();

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

// Lesson 4 POST AND DELETE
// Parser Setup
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({ extended: false });

app.post('/cities', parseUrlencoded, function (request, response) {
  var city = createCity(request.body.name, request.body.description);
  response.status(201).json(city);
});

app.listen(3000);

var createCity = function(name, description){
  cities[name] = description;
  return name; 
};

// VALIDATION
app.post('/cities', parseUrlencoded, function (request, response) {
  if(request.body.description.length > 4){
    var city = createCity(request.body.name, request.body.description);
  response.status(201).json(city);
  } else {
    response.status(400).json('Invalid City');
  }
});

// Delete route
app.delete('/cities/:name', function (request, response) {
  if(cities[request.cityName]){
delete cities[request.cityName];
    response.sendStatus(200);
}
  else {
  response.sendStatus(404);
}
}); 

//LESSON 5  Route Instance
app.route('/cities')
.get(function(request, response) {
  if(request.query.search) {
    response.json(citySearch(request.query.search));
} else {
    response.json(cities);
}
})

// POST route for /cities
.post(parseUrlencoded, function (request, response) {
  if(request.body.description.length > 4) {
    var city = createCity(request.body.name, request.body.description);
    response.status(201).json(city);
  } else {
    response.status(400).json('Invalid City');
  }
});

// GET route for /cities/:name
app.route('/cities/:name')
  .get(function (request, response) {
  var cityInfo = cities[request.cityName];
  if(cityInfo) {
    response.json(cityInfo);
  } else {
    response.status(404).json('City not found');
  }
})

// DELETE route for /cities/:name
.delete(function (request, response) {
  if(cities[request.cityName]) {
    delete cities[request.cityName];
    response.sendStatus(200);
  } else {
    response.sendStatus(404);
  }
});

// Using a Router Instance
var express = require('express');
var app = express();

var bodyParser = require('body-parser');
var parseUrlencoded = bodyParser.urlencoded({ extended: false });

// In memory store for the
// cities in our application
var cities = {
  'Lotopia': 'Rough and mountainous',
  'Caspiana': 'Sky-top island',
  'Indigo': 'Vibrant and thriving',
  'Paradise': 'Lush, green plantation',
  'Flotilla': 'Bustling urban oasis'
};

app.param('name', function (request, response, next) {
  request.cityName = parseCityName(request.params.name);
});
var router = express.Router();
router.route('/')
  .get(function (request, response) {
    if(request.query.search){
      response.json(citySearch(request.query.search));
    }else{
      response.json(cities);
    }
  })

  .post(parseUrlencoded, function (request, response) {
    if(request.body.description.length > 4){
      var city = createCity(request.body.name, request.body.description);
      response.status(201).json(city);
    }else{
      response.status(400).json('Invalid City');
    }
  });

router.route('/:name')
  .get(function (request, response) {
    var cityInfo = cities[request.cityName];
    if(cityInfo){
      response.json(cityInfo);
    }else{
      response.status(404).json("City not found");
    }
  })

  .delete(function (request, response) {
    if(cities[request.cityName]){
      delete cities[request.cityName];
      response.sendStatus(200);
    }else{
      response.sendStatus(404);
    }
  });

app.use('/cities', router);

// 
var router = require('./routes/cities.js');