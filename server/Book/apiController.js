"use strict";

var request = require("request");
// var path = request("path");

module.exports = {
  //TODO: pass in author, title, etc.
  getByAuthor: function(req, res){
    var baseUrl = "https://www.googleapis.com/books/v1/volumes?q=inauthor:";
    var author = "Kurt\ Vonnegut";
    var fullPath = baseUrl.concat(author, "&filter=partial");
    request(fullPath, function(error, response, body){
      if(!error && response.statusCode === 200){
        res.send(body);
      }
    });
  },

  getByTitle: function(req, res){
    var baseUrl = "https://www.googleapis.com/books/v1/volumes?q=intitle:";
    var title = "Of Mice and Men";
    var fullPath = baseUrl.concat(title.split(" ").join("\\ "), "&filter=partial");
    // var fullPath = "https://openlibrary.org/api/books?bibkeys=ISBN:9780980200447&jscmd=details&format=json";
    request(fullPath, function(error, response, body){
      if(!error && response.statusCode === 200){
        res.send(JSON.parse(body));
      }
    });
  },

  getByGenre: function(req, res){
    var baseUrl = "https://www.googleapis.com/books/v1/volumes?q=subject:";
    var genre = "horror";
    var fullPath = baseUrl.concat(genre.split(" ").join("\\"), "&filter=partial");
    request(fullPath, function(error, response, body){
      if(!error && response.statusCode === 200){
        res.send(JSON.parse(body));
      }
  });
}
};
