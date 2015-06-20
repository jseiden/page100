var userController = require('./userController.js');

module.exports = function (app) {
  // app is userRouter injected from middlware.js

  app.post('/postSomething', userController.postSomething);
 
  // app.post('/signin', userController.signin);
  // app.get('/signedin', userController.checkAuth);

  app.get("/", function(req, res) {
    // res.sendFile('../../app/www/index.html')
    res.send("sup brah");
  });
};