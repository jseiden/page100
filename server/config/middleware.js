var morgan = require('morgan');

module.exports = function (app, express) {
  var userRouter = express.Router();
  var bookRouter = express.Router();

  //logs html requests
  app.use(morgan('dev'));


  app.use('/users', userRouter);// use user router for all user request
  app.use('/books', bookRouter);

  //inject router into correct router file
  require('../User/userRoutes.js')(app, express);
  require('../Book/bookRoutes.js')(app, express);
};