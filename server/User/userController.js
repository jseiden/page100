var Firebase = require('firebase');
var baseUrl = "https://flickering-torch-8617.firebaseio.com/";
var ref = new Firebase(baseUrl);
var usersRef = ref.child("users");

module.exports = {
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
  getUsers : function(req, res){
    res.send("you've reached getUsers");
  }
};