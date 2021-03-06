"use strict";
var mongoose = require("mongoose");
var bcrypt = require("bcrypt-nodejs");
var Q = require("q");
var SALT_WORK_FACTOR = 10;
var objectId = mongoose.Schema.Types.ObjectId;


var UserSchema = new mongoose.Schema({
  _id: objectId,
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  filterPreferences: [String],
  salt: String,
  stack: [{ type: objectId, ref: "Book" }]
});

UserSchema.methods.comparePasswords = function(possiblePw){
  var defer = Q.defer();
  var savedPw = this.password;
  brcypt.compare(possiblePw, savedPw, function(err, match){
    if(err){
      defer.reject(err);
    } else {
      defer.resolve(match);
    }
  });
  return defer.promise;
};

UserSchema.pre("save", function(next){
  var user = this;

  // hash pw if modified or new
  if (!user.isModified("password")){
    return next();
  }

  // hash pw and salt
  brcypt.genSalt(SALT_WORK_FACTOR, function(err, salt){
    if (err) {
      return next(err);
    }

    bcrypt.hash(user.password, salt, null, function(error, hash){
      if(error){
        return next(error);
      }

      // override plain pw with hashed pw
      user.password = hash;
      user.salt = salt;
      next();
    });
  });
});

module.exports = mongoose.model("users", UserSchema);
