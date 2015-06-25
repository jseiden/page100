"use strict";
angular.module("starter.services", [])

  .factory("Auth", function($http){
    var signin = function (user) {
        return $http({
          method: "POST",
          url: "http://localhost:3000/user/signin",
          data: user
        })
        .then(function (resp) {
          return resp.data.token;
        });
      };

    var signup = function (user) {
      return $http({
        method: "POST",
        url: "http://localhost:3000/user/signup",
        data: user
      })
      .then(function (resp) {
        console.log(resp.data);
        return resp.data.token;
      });
    };

    return {
      signin: signin,
      signup: signup
    };
  })
 
  .factory("Account", function(){
    var getUsername = function(){
      return $http({
        method:"GET", 
        url: "/users"
      })
      .then(function(resp){
        console.log(resp);
        return resp.data;
      });
    };
    
    var changeUsername = function(user){
      return $http({
        method:"PUT", 
        url: "/users",
        data: user
      }).then(function(resp){
        return resp.data;
      });
    };
   
    var changePassword = function(user){
    };

    var changeEmail = function(user){
    };
   
    return {
      getUsername: getUsername,
      changeUsername: changeUsername,
      changePassword: changePassword,
      changeEmail: changeEmail
    };
  })

  .factory("BookChoices", function($http){
    var addToStack = function (book) {
      return $http({
        method: "POST",
        url: "http://localhost:3000/user",
        data: book
      })
      .then(function () {
        console.log("book added to stack");
      });
    };

    var getStack = function () {
      return $http({
        method: "GET",
        url: "http://localhost:3000/user"
      })
      .then(function (resp){
        return resp.data;
      });
    };

    var removeFromStack = function (book) {
      return $http({
        method: "POST",
        url: "http://localhost:3000/user",
        data: book
      });
    };

    return {
      addToStack: addToStack,
      getStack: getStack,
      removeFromStack: removeFromStack
    };
  });
