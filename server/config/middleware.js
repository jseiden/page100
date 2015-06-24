"use strict";
// var path = require("path");
var morgan = require("morgan");
var bodyParser = require("body-parser");
var helpers = require("./helpers.js");

module.exports = function (app, express) {

  //TODO: figure out if express.Router is still needed. mixed options online and works as is
  var userRouter = express.Router();
  var bookRouter = express.Router();
  var booksApiRouter = express.Router();


  //logs http requests
  app.use(morgan("dev"));

  //parses body of http request
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());

<<<<<<< HEAD

  app.use("/user", userRouter);
  app.use("/book", bookRouter);

  app.use("./../User", helpers.decode);

  require("../User/userRoutes.js")(userRouter);
  require("../Book/bookRoutes.js")(bookRouter);
  require("../Book/apiRoutes.js")(app, express);
=======
  app.use("/api/users", userRouter);
  app.use("/api/books", bookRouter);
  app.use("/booksApi", booksApiRouter);

  app.use("./../User", helpers.decode);

  //TODO figure out why this format breaks it:
  //   require("../User/userRoutes.js")(userRouter);

  require("./../User/userRoutes.js")(userRouter);
  require("./../Book/bookRoutes.js")(bookRouter);
  require("./../Book/booksApiRoutes.js")(booksApiRouter);
>>>>>>> 2c24c97c1dd9bd6a4f94fa335df008b91f92975f
};
