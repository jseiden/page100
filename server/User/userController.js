"use strict";
var User = require("./userModel.js");
//promise library
var Q = require("q");
//JSON tokens
var jwt = require("jwt-simple");

module.exports = {
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
