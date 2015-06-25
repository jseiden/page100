"use strict";

var Q = require("q");
var Book = require("./bookModel.js");
var User = require("../User/userModel.js");


//getTenBooks
//getBookByTitle
//
var findUserById = function(userId, callback) {
  var findUser = Q.nbind(User.findOne, User);
  findUser({ _id: userId }).then(function(user) {
    callback(user);
  });
};



module.exports = {

 //TODO: build out book methods

  postBook: function (req, res){
    res.send("reached postBook in books Controller");
  },

  getBooks: function(req, res){
    var count = req.query.count || 10;
    var userId = req.query.user;
    //TODO: figure out why only first query in url string is being read.

    findUserById(userId, function(user) {
      var genres = user.filterPreferences;
      console.log(genres);
      Book.find({
        genre: { $in: genres }
      })
        .limit(count)
        .exec(function(err, books){
          if (!books) {
            console.log("no books");
          }
          if (err) {
            console.log(error);
          } else {
            console.log(books);
            res.json(books);
          }

        });
    });
  }

};
