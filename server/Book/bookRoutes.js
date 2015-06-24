"use strict";

var bookController = require("./bookController.js");

module.exports = function(app){

 app.post("/app/postBook", bookController.postBook);

 app.get("/app/getBooks", bookController.getBooks);

 app.post("/app/addToStack", bookController.addToStack);


};
