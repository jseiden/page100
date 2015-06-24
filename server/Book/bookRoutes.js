"use strict";

var bookController = require("./bookController.js");

module.exports = function(app){

 app.post("book/postbook", bookController.postBook);
 app.get("book/getbooks", bookController.getBooks);

};
