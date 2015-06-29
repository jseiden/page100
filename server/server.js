"use strict";
var express = require("express");
var mongoose = require("mongoose");
var cors = require("cors");
// var testStubs = require("./testposts.js");
// var createDummies = require("./dummyData.js");

//instance of express
var app = express();

//use CORS module
app.use(cors());


mongoose.connect("mongodb://user:wemakeawesomeshit@ds051110.mongolab.com:51110/page100");

// configure our server with all the middleware and routing
require("./config/middleware.js")(app, express);

//port defaults to localhost3000 if env variable is not present
var port = 80;

app.listen(port, function() {
   console.log("Listening on " + port);
 });

// testStubs();
// createDummies();

module.exports = app;
