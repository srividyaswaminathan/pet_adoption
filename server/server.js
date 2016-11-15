var express = require('express'),
    PORT = 8000;

var app = express();
app.use(express.static(__dirname + "./../client"));
// CONNECT APP TO ROUTING SYSTEM
var routes = require('./config/routes');
routes(app);

// CONNECT OUR DB
require('./config/db');

app.listen(PORT, function(){
  console.log(`Running on ${PORT}`);
});
