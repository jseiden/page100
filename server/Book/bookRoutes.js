"use strict";

var bookController = require("./bookController.js");

module.exports = function(app){


app.route("/getBooks")
  .get(bookController.getBooks);

app.route("/postBook")
  .post(bookController.postBook);
};
