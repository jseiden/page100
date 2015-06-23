"use strict";

module.exports = {
  //this posts user 'demoname' to the users object  TODO: set up generic user obj template, TODO: input name dynamically
  // postUser: function(req, res){
  signin: function(req, res){
    res.send("reached signin in userController");
  },

  signup: function(req, res){
    res.send("reached signup in userController");
  },

  postUser: function(req, res){
    res.send("reached postUser in userController");
  },

  //this queries the database for data in demoName     TODO: query for name dynamically
  getUsers: function(req, res){

    res.send("reached getUser in userController");
}
};
