"use strict";

//jwt = JSON Web Token
var jwt = require("jwt-simple");
var request = require("request");
//

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
  formatBooks: function(obj){
    //TODO: what is better way to bind this context?
    var that = this;
    var resObj = JSON.parse(obj); //this is potentially many books
    var result = [];
    //iterate through each result
    resObj.docs.forEach(function(doc){
      //make sure all desired fields exist
      if(doc.isbn && doc["title_suggest"] && doc["author_name"] && doc.subject){
        var newBook = {};
        //using isbn internally but not writing to object
        var isbn = doc.isbn[1] || doc.isbn[0];
        newBook.title = doc["title_suggest"];
        newBook.author = doc["author_name"][0];
        //TODO filter out weird words in subject field
        newBook.genre = doc.subject[1] || doc.subject[0];
        newBook.sample = that.getBookText();
        newBook.amazonLink = "www.amazon.com/coolBook";
        newBook.image = that.getBookImage(this, isbn);
        // console.log("this: ", that);
        result.push(newBook);
    }
    });
    return result;
  },

  getBookImage: function(context, isbn){
  // getBookImage: function(req, res, isbn){
  //   var requestUrl = ("http://covers.openlibrary.org/b/$key/isbn/").concat(isbn, "-L.jpg");
  //   request(requestUrl, function(error, response, body){
  //         if(!error && response.statusCode === 200){
  //            res.send(body);
  //         };
  //   });
      // return "this is an image.";
    var img = request("http://covers.openlibrary.org/b/isbn/" + isbn + "-L.jpg", function(error, response, body){
        if(!error && response.statusCode === 200){
          // res.send(body);
          response.send(body);
        }
      });
    return img;
  },

  getBookText: function(){
    var baseUrl = "http://ia700401.us.archive.org";
    return "sample";
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
};
