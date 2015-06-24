"use strict";

var request = require("request");
// in helpers you will find the function that formats the book results
var helpers = require("./../config/helpers");
// var path = request("path");

module.exports = {
  //TODO: pass in author, title, etc.

   //TODO put this as an external helper
  // formatBook: function(obj){
  //   var resBody = JSON.parse(body);
  //   // var book = {};
  //   return resBody;
  // },

  getByAuthor: function(req, res){
    var author = "dahl";
    var fullPath = ("http://openlibrary.org/search.json?author=").concat(author);
    request(fullPath, function(error, response, body){
      if(!error && response.statusCode === 200){
        var resBody = helpers.formatBooks(body);
        res.send(resBody);
      }
    });
  },

  // getByTitle: function(req, res){
  //   // var baseUrl = "https://www.googleapis.com/books/v1/volumes?q=intitle:";
  //   var title = "Of Mice and Men";
  //   var fullPath =("http://openlibrary.org/search.json?title=").concat(title.split(" ").join("+"));
  //   // var fullPath = "https://openlibrary.org/api/books?bibkeys=ISBN:9780980200447&jscmd=details&format=json";
  //   request(fullPath, function(error, response, body){
  //     if(!error && response.statusCode === 200){
  //       var resBody = helpers.formatBooks(body);
  //       res.send(resBody)
  //     }
  //   });
  // },

  getByGenre: function(req, res){
    var genre = "horror";
    var genreConcat = genre.split(" ").join("\\");
    var fullPath = ("http://openlibrary.org/search.json?subject=").concat(genreConcat);
    request(fullPath, function(error, response, body){
      if(!error && response.statusCode === 200){
        var resBody = helpers.formatBooks(body);
        res.send(resBody);
      }
  });
}

};
