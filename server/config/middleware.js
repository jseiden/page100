module.exports = function (app, express) {
  var userRouter = express.Router();

  app.use('/users', userRouter); // use user router for all user request

  //inject router into correct router file
  require('../User/userRoutes.js')(app, express);
};