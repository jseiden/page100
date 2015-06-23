"use strict";

var userController = require("./userController.js");

module.exports = function (app) {
  // app is userRouter injected from middlware.js

  app.post("/app/signin", userController.signin);

  app.post("/app/signup", userController.signup);

  app.get("/app/getUsers", userController.getUsers);

  // app.get('/signedin', userController.checkAuth);

  app.get("/", function(req, res) {
    // res.sendFile('../../app/www/index.html')
    res.send("reached root");
  });
};
