// var Firebase = require('firebase');
// var baseUrl = "https://flickering-torch-8617.firebaseio.com/";
// var ref = new Firebase(baseUrl);
// var usersRef = ref.child("users");

module.exports = {
  //this posts user 'demoname' to the users object  TODO: set up generic user obj template, TODO: input name dynamically
  // postUser: function(req, res){
  postUser: function(req, res){
      // var demoName = "chris";
      // usersRef.child(demoName).set({
      //   "password" : "mynameisjesse", 
      //   "preferences" : {
      //     "fiction" : true,
      //     "mystery" : true,
      //     "romance" : true, 
      //     "vampire" : true
      //   }
      // })
  },
  //this queries the database for data in demoName     TODO: query for name dynamically
  getUsers : function(req, res){
  //   var demoName = "Jake";
  //   usersRef.on("value", function(snapshot){      
  //     res.send(snapshot.val());
  //   })
  // }
};