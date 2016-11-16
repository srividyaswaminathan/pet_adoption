var express = require('express'),
    PORT = 8000,
    bodyParser = require('body-parser');

var app = express();
app.use(express.static(__dirname + "./../client"));
app.use(express.static(__dirname + './../bower_components'));

// app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// CONNECT APP TO ROUTING SYSTEM
var routes = require('./config/routes');
routes(app);

// CONNECT OUR DB
require('./config/db');

app.listen(PORT, function(){
  console.log(`Running on ${PORT}`);
});
