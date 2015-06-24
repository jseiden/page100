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
    res.send("reached postBook in bo okController");
  },

  getBooks: function(req, res){
    var count = req.query.count || 10;
    var userId = req.query.user;
    var findAll = Q.nbind(Book.find, Book);

    findUserById(userId, function(user) {
      var genres = user.filterPreferences;
      findAll({})
        .where("genre").in(genres)
        .limit(count)
        .then(function (books) {
          res.json(books);
        })
        .fail(function (error) {
          next(error);
        });
    });
  }

};
