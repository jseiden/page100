"use strict";
var path = require("path");
var morgan = require("morgan");
var bodyParser = require("body-parser");
var helpers = require("./helpers.js");

module.exports = function (app, express) {

  //TODO: figure out if express.Router is still needed. mixed options online and works as is
  // var userRouter = express.Router();
  // var bookRouter = express.Router();

  //logs http requests
  app.use(morgan("dev"));

  //parses body of http request
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());

 //serves static files
  app.use(express.static(path.join(__dirname, "./../../app/www")));


  // app.use('/users', userRouter);
  // app.use('/books', bookRouter);

  app.use("./../User", helpers.decode);

  require("../User/userRoutes.js")(app, express);
  require("../Book/bookRoutes.js")(app, express);
};
