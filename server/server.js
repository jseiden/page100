
var express = require('express');
var app = express();

// configure our server with all the middleware and and routing
require('./config/middleware.js')(app, express);

var port = process.env.port || 3000;

app.listen(port, function() {
   console.log("Listening on " + port);
 });

module.exports = app;