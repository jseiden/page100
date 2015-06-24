"use strict";

var bookController = require("./bookController.js");

module.exports = function(app){

 app.post("/postbook", bookController.postBook);
 app.get("/getbooks", bookController.getBooks);

};
