"user script";
var mongoose = require("mongoose");

var BookSchema = new mongoose.Schema({
  title: String,
  author: String,
  genre: String,
  sample: String,
  amazonLink: String,
  _id: Schema.Types.ObjectId
});

module.exports = mongoose.model("Book", BookSchema);
