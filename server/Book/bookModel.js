"user script";
var mongoose = require("mongoose");
var objectId = mongoose.Schema.Types.ObjectId;

var BookSchema = new mongoose.Schema({
	_id: objectId,
  title: String,
  author: String,
  genre: String,
  sample: String,
  amazonLink: String
});

module.exports = mongoose.model("Book", BookSchema);
