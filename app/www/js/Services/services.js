"use strict";
angular.module("starter.services", [])

  .factory("Auth", function($http, SERVER){
    var signin = function (user) {
        return $http({
          method: "POST",
          url: SERVER.url + "/user/signin",
          data: user
        })
        .then(function (resp) {
          return resp.data;
        });
      };

    var signup = function (user) {
      return $http({
        method: "POST",
        url: SERVER.url + "/user/signup",
        data: user
      })
      .then(function (resp) {
        return resp.data;
      });
    };

    // var refreshUser = function (){
    //   return $http({
    //     method: "GET",
    //     url: SERVER.url + "user/refresh"
    //   })
    // }

    return {
      signin: signin,
      signup: signup
      // refreshUser: refreshUser
    };
  })

  .factory("Account", function(){
    var getUsername = function(){
      return $http({
        method: "GET",
        url: "/users"
      })
      .then(function(resp){
        console.log(resp);
        return resp.data;
      });
    };

    var changeUsername = function(user){
      return $http({
        method: "PUT",
        url: "/users",
        data: user
      }).then(function(resp){
        return resp.data;
      });
    };

    // var changePassword = function(user){
    // };

    // var changeEmail = function(user){
    // };

    return {
      getUsername: getUsername,
      changeUsername: changeUsername,
      changePassword: changePassword,
      changeEmail: changeEmail
    };
  })

  .factory("BookChoices", function($http, SERVER){
    var getBooks = function(userId, count) {
      return $http({
        method: "GET",
        url: SERVER.url + "/book/getBooks?count=" + count + "&user=" + userId
      })
      .then(function (resp){
        console.log("Books", resp);
        return resp.data;
      });
    };

    var addToStack = function (id, bookId) {
      return $http({
        method: "POST",
        url: SERVER.url + "/user/" + id + "/addbook",
        data: bookId
      });
    };

    var getStack = function (id) {
      return $http({
        method: "GET",
        url: SERVER.url + "/user/" + id + "/stack"
      })
      .then(function (resp){
        return resp.data;
      });
    };

    var removeFromStack = function (id, bookId) {
      return $http({
        method: "DELETE",
        url: SERVER.url + "/user/" + id + "/removebook",
        data: bookId
      });
    };

    return {
      getBooks: getBooks,
      addToStack: addToStack,
      getStack: getStack,
      removeFromStack: removeFromStack
    };
  });
