"use strict";

var userController = require("./userController.js");

module.exports = function (app) {
  // app is userRouter injected from middlware.js

  app.route("/signin")
    .post(userController.signin);

  app.route("/signup")
    .post(userController.signup);

  app.route("/checkAuth")
    .get(userController.checkAuth);

  //test
  app.route("/getUsers")
    .get(userController.getUsers);

  // app.get('/signedin', userController.checkAuth);

  app.param("id", userController.getUserById);

  //getting and adding to stack
  app.get("user/:id/stack", userController.getStack);
  app.post("user/:id/addbook", userController.addToStack);
  app.delete("user/:id/removebook", userController.removeFromStack);



};
