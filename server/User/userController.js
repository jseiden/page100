"use strict";


var Q = require("q");
var User = require("./userModel.js");


module.exports = {
  //this posts user 'demoname' to the users object  TODO: set up generic user obj template, TODO: input name dynamically
  // postUser: function(req, res){

  getUserById: function (req, res, next, id) {
    var findUser = Q.nbind(User.findOne, User);
    findUser({_id: id})
      .then(function (user) {
        if (user) {
          req.user = user;
          next();
        } else {
          next(new Error("User not added yet"));
        }
      })
      .fail(function (error) {
        next(error);
      });
  },

  addToStack: function(req, res) {
    req.user.stack.push(req.body._id);
    req.user.save(function(err, user) {
      if (err) {
        console.log("error saving user stack / adding book");
      } else {
        res.json(user);
      }
    });
  },

  removeFromStack: function(req, res) {
    req.user.stack.slice(req.user.stack.indexOf(req.body._id), 1);
    req.user.save(function(err, user) {
      if (err) {
        console.log("error saving user stack / removing book");
      } else {
        res.json(user);
      }
    });
  },


  getStack: function(req, res) {
    //populate makes question
    req.user.populate("stack")
      .exec(function(err, books) {
        if (err) {
          console.log("cannot find stack");
        } else {
          res.json(books);
        }
      });
  },




  signin: function(req, res){
    res.send("reached signin in userController");
  },

  signup: function(req, res){
    res.send("reached signup in userController");
  },

  postUser: function(req, res){
    res.send("reached postUser in userController");
  },

  //this queries the database for data in demoName     TODO: query for name dynamically
  getUsers: function(req, res){

    res.send("reached getUser in userController");
}
};
