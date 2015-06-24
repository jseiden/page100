"user script";
var mongoose = require("mongoose");

var BookSchema = new mongoose.Schema({
	_id: Schema.Types.ObjectId,
  title: String,
  author: String,
  genre: String,
  sample: String,
  amazonLink: String,
});

module.exports = mongoose.model("Book", BookSchema);
