"use strict";
// var Book = require("./bookModel");
// var Q = require("q");

module.exports = {

  postBook: function (req, res){
    res.send("reached postBook in bookController");
  },
  getBooks: function(req, res){
    res.send("reached getBooks in bookController");
  }
  // ,

  // addToStack: function(req, res){
  //   res.send("reached addToStack in bookController");
  // }

};
