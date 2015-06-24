"use strict";
var booksApiController = require("./booksApiController");
module.exports = function(app){

  app.route("/getByAuthor")
   .get(booksApiController.getByAuthor);

  app.route("/getByTitle")
   .get(booksApiController.getByTitle);

  app.route("/getByGenre")
   .get(booksApiController.getByGenre);

};
