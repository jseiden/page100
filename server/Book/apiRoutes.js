"use strict";
var apiController = require("./apiController");
module.exports = function(app){
  app.get("/app/getByAuthor", apiController.getByAuthor);
  app.get("/app/getByTitle", apiController.getByTitle);
  app.get("/app/getByGenre", apiController.getByGenre);

};
