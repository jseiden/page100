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
    findUserById(userId, function(user) {
      Book.find({
        genre: { $in: user.filterPreferences },
        _id: { $gt: user.bookPosition, $nin: user.stack } //only pull books past the user's position, and not in the user's stack already
      })
        .sort({_id: 1})
        .limit(count)
        .exec(function(err, books){
          if (books.length === 0) {
            console.log("no books");
            res.send(null); //handle no books?
          }
          if (err) {
            console.log(err);
          } else {
            //assign users position to id of first book in collection. note that books are being sent from highest id to lowest id
            console.log(books);
            user.bookPosition = books[books.length - 1]._id;
            user.save(function(error) {
              if (err) {
                console.log(error);
              } else {
              res.json(books);
              }
            });
          }
        });
    });
  }
};
