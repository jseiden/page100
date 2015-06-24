"use strict";
var User = require("./userModel.js");
//promise library
var Q = require("q");
//JSON tokens
var jwt = require("jwt-simple");


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
    //.populate() makes stack populate array of book objects based on IDs in the user's stack array.
    //it does this by accessing the book document store and matching IDs.
    //this is possible because we reference books in the user schema.
    req.user.populate("stack")
      .exec(function(err, books) {
        if (err) {
          console.log("cannot find stack");
        } else {
          res.json(books);
        }
      });
  },

  signin: function(req, res, next){
    // res.send("reached signin in userController");
    var username = req.body.username;
    var password = req.body.password;

    //TODO: this following code block seems to produce an error upon sigin request

    var findUser = Q.nBind(User.findOne, User);
    findUser({username: username})
      .then(function(user){
        if(!user){
          next(new Error("User does not exist"));
        } else{
          return user.comparePasswords(password)
            .then(function(foundUser){
              if (foundUser){
                var token = jwt.encode(user, "secret");
                res.json({token: token});
              } else{
                return next(new Error("No user"));
              }
            });
        }
      })
      .fail(function(error){
        next(error);
      });
      res.send("reached signin in userController");
  },

  signup: function(req, res, next){
    var username = req.body.username;
    var password = req.body.password;
    var create;
    var newUser;

    var findOne = Q.nbind(User.findOne, User);

    findOne({username: username})
      .then(function(user) {
        if (user) {
          next(new Error("User already exists!"));
        } else {
          // make a new user if not one
          create = Q.nbind(User.create, User);
          newUser = {
            username: username,
            password: password
          };
          return create(newUser);
        }
      })
      .then(function (user) {
        // create token to send back for auth
        var token = jwt.encode(user, "secret");
        res.json({token: token});
      })
      .fail(function (error) {
        next(error);
      });
    res.send("reached signup in userController");
  },



  //this queries the database for data in demoName     TODO: query for name dynamically
  getUsers: function(req, res){
    res.send("reached getUser in userController");
  },


  checkAuth: function (req, res, next) {
    // checking to see if the user is authenticated
    // grab the token in the header is any
    // then decode the token, which we end up being the user object
    // check to see if that user exists in the database
    var token = req.headers["x-access-token"];
    if (!token) {
      next(new Error("No token"));
    } else {
      var user = jwt.decode(token, "secret");
      var findUser = Q.nbind(User.findOne, User);
      findUser({username: user.username})
        .then(function (foundUser) {
          if (foundUser) {
            res.send(200);
          } else {
            res.send(401);
          }
        })
        .fail(function (error) {
          next(error);
        });
    }
  }
};
