"use strict";
var apiController = require("./apiController");
module.exports = function(app){
  app.get("/api/getByAuthor", apiController.getByAuthor);
  app.get("/api/getByTitle", apiController.getByTitle);
  app.get("/api/getByGenre", apiController.getByGenre);

};
