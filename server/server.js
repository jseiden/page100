"use strict";
var express = require("express");

//orm to connect to mongodb
var mongoose = require("mongoose");

//instance of express
var app = express();

//connect to db with mongoose ORM
//TODO: change to Digital Ocean Url
mongoose.connect("mongodb://localhost/page100");

// configure our server with all the middleware and routing
require("./config/middleware.js")(app, express);

//port defaults to localhost3000 if env variable is not present
var port = process.env.port || 3000;

app.listen(port, function() {
   console.log("Listening on " + port);
 });

module.exports = app;
