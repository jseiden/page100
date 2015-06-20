var Firebase = require('firebase');
var baseUrl = "https://flickering-torch-8617.firebaseio.com/";
var ref = new Firebase(baseUrl);
var usersRef = ref.child("users");

module.exports = {
  //this posts user 'demoname' to the users object
  postUser: function(req, res){
      var demoName = "robert";
      usersRef.child(demoName).set({
        "password" : "mynameisbob", 
        "preferences" : {
          "fiction" : true,
          "mystery" : true,
          "romance" : true, 
          "vampire" : true
        }
      })
  },
  //this queries the database for keys in user 'demoname'     TODO: query for name dynamically, TODO: return object to interact with- have to find write firebase method
  getUsers : function(req, res){
    var demoName = "Jake";
    usersRef.child(demoName).orderByKey().on("child_added", function(snapshot){
      // console.log(snapshot.key());
      console.log(snapshot.key());
    })
    res.send("you've reached getUsers");
  }
};