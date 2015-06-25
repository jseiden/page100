"use strict";
var express = require("express");
var mongoose = require("mongoose");
var cors = require("cors");
// var testStubs = require("./testposts.js");


//instance of express
var app = express();

//use CORS module
app.use(cors());


mongoose.connect("mongodb://user:wemakeawesomeshit@ds051110.mongolab.com:51110/page100");

// configure our server with all the middleware and routing
require("./config/middleware.js")(app, express);

//port defaults to localhost3000 if env variable is not present
var port = process.env.port || 3000;

app.listen(port, function() {
   console.log("Listening on " + port);
 });


module.exports = app;
