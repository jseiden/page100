

module.exports = {
  //this posts user 'demoname' to the users object  TODO: set up generic user obj template, TODO: input name dynamically
  // postUser: function(req, res){
  postUser: function(req, res){
      
    res.send("reached postUser in userController");
  },
  //this queries the database for data in demoName     TODO: query for name dynamically
  getUsers : function(req, res){
 
    res.send("reached getUser in userController");
}
};