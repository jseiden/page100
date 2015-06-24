"use strict";
// var path = require("path");
var morgan = require("morgan");
var bodyParser = require("body-parser");
var helpers = require("./helpers.js");

module.exports = function (app, express) {

  //TODO: figure out if express.Router is still needed. mixed options online and works as is
  var UserRouter = express.Router();
  var BookRouter = express.Router();
  var BooksApiRouter = express.Router();

  //logs http requests
  app.use(morgan("dev"));

  //parses body of http request
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());

  app.use("/api/users", UserRouter);
  app.use("/api/books", BookRouter);
  app.use("/booksApi", BooksApiRouter);

  app.use("./../User", helpers.decode);

  //TODO figure out why this format breaks it:
  //   require("../User/userRoutes.js")(userRouter);

  require("./../User/userRoutes.js")(UserRouter);
  require("./../Book/bookRoutes.js")(BookRouter);
  require("./../Book/booksApiRoutes.js")(BooksApiRouter);
};
