"use strict";
module.exports = {
  postBook: function (req, res){
    res.send("reached addBooks in bookController");
  },
  getBooks: function(req, res){
    res.send("reached getBooks in bookController");
  }
  // ,
  // addToStack : function(req, res){
  //   res.send("reached addToStack in bookController");
  // }
};
