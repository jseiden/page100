"use strict";

//jst = JSON Web Token
var jwt = require("jwt-simple");

module.exports = {
  //TODO: decide if we need these

  // errorLogger: function (error, req, res, next) {
  //   // log the error then send it to the next middleware in
  //   // middleware.js

  //   console.error(error.stack);
  //   next(error);
  // },

  // errorHandler: function (error, req, res, next) {
  //   // send error message to client
  //   // message for gracefull error handling on app
  //   res.send(500, {error: error.message});
  // },

  //I, Jake, am using this for reference. doesn't belong in this file
//   var BookSchema = new mongoose.Schema({
//   _id: objectId,
//   title: String,
//   author: String,
//   genre: String,
//   sample: String,
//   amazonLink: String
// });


  //used by bookApiController to format books from googleBooks
  formatBook: function(obj){
    var resObj = JSON.parse(obj);
    var book = {};
    book.title = resObj.items[0].volumeInfo.title;
    book.author = resObj.items[0].volumeInfo.authors[0];
    // book["genre"] = ""
    return book;
  },

  decode: function (req, res, next) {
    var token = req.headers["x-access-token"];
    var user;

    if (!token) {
      return res.send(403); // send forbidden if a token is not provided
    }
    try {
      // decode token and attach user to the request
      // for use inside our controllers
      user = jwt.decode(token, "secret");
      req.user = user;
      next();
    } catch(error) {
      return next(error);
    }

  }
  // ,
  // //creates trimmed down json object from google books results
  // formatBook: function(req, res){

  // }
};
