"use strict";

var morgan = require("morgan");

module.exports = function (app, express) {
  // var userRouter = express.Router();
  // var bookRouter = express.Router();


  //logs http requests
  app.use(morgan("dev"));

  // app.use('/users', userRouter);
  // app.use('/books', bookRouter);

  require("../User/userRoutes.js")(app, express);
  require("../Book/bookRoutes.js")(app, express);
};
