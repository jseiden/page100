"use strict";
var Q = require("q");
var Book = require("./bookModel.js");
var User = require("../User/userModel.js");

//getTenBooks
//getBookByTitle
//
var findUserById = function(username, callback) {
  var findUser = Q.nbind(User.findOne, User);
  findUser({ 'username': username }).then(function(user) {
    callback(user);
  })
};





module.exports = {
  postBook: function (req, res){
    res.send("reached addBooks in bookController");
  },



  getBooks: function(req, res){
    var count = req.query.count || 10;
    var username = req.query.user;
    var findAll = Q.nbind(Book.find, Book);
    
    findUserById(username, function(user) {
      var genres = user.filterPreferences;
      findAll({})
        .where('genre').in(genres)
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
