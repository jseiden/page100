var Firebase = require('firebase');
var baseUrl = "https://flickering-torch-8617.firebaseio.com/";
var ref = new Firebase(baseUrl);

module.exports = {
  // getUsers: function(req, res){

  //   ref.on("value", function(snapshot) {
  //     console.log(snapshot.val());
  //   }, function (errorObject) {
  //     console.log("The read failed: " + errorObject.code);
  //   });
  //   // res.send("userController.getUser")
  // }

  // signup: function(req, res){
  //    res.send("userController..signup") ;
  // }

  // login: function (req, res) { 
  // }, 
  postSomething: function(req, res){
    var usersRef = ref.child("users");
      usersRef.push({"robert" : "toucan"});
  }
};