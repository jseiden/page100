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
  app.post("/:id/filterpreferences", userController.changeFilterPreferences);
  app.post("/:id/email", userController.changeEmail);
  app.post("/:id/username", userController.changeUsername);
  app.get("/:id/stack", userController.getStack);
  app.post("/:id/addbook", userController.addToStack);
  app.delete("/:id/removebook", userController.removeFromStack);
};
