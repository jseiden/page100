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

  postBook: function (req, res){
    res.send("reached postBook in books Controller");
  },

  getBooks: function(req, res){
    var count = req.query.count || 10;
    var userId = req.query.user;
    //TODO: figure out why only first query in url string is being read.

    findUserById(userId, function(user) {
      Book.find({
        genre: { $in: user.filterPreferences },
        _id: { $gt: user.bookPosition, $nin: user.stack } //only pull books past the user's position, and not in the user's stack already
      })
        .limit(count)
        .exec(function(err, books){
          if (!books) {
            console.log("no books");
          }
          if (err) {
            console.log(err);
          } else {
            //assign users position to id of last book in collection
            user.bookPosition = books[books.length - 1]._id;
            user.save(function(error) {
              if (err) {
                console.log(error);
              } else {
              console.log(books);
              res.json(books);
              }
            });
          }
        });
    });
  }
};
