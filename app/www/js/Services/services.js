"use strict";
angular.module("starter.services", [])

  .factory("Auth", function($http){
    var signin = function (user) {
        return $http({
          method: "POST",
          url: "/app/signin",
          data: user
        })
        .then(function (resp) {
          return resp.data.token;
        });
      };

    var signup = function (user) {
      return $http({
        method: "POST",
        url: "/app/signup",
        data: user
      })
      .then(function (resp) {
        return resp.data.token;
      });
    };

    return {
      signin: signin,
      signup: signup
    };

  })

  .factory("BookChoices", function($http){
    var addToStack = function (book) {
      return $http({
        method: "POST",
        url: "/api/users",
        data: book
      })
      .then(function () {
        console.log("book added to stack");
      });
    };

    var getStack = function () {
      return $http({
        method: "GET",
        url: "/api/users"
      })
      .then(function (resp){
        return resp.data;
      });
    };

    var removeFromStack = function (book) {
      return $http({
        method: "POST",
        url: "api/users",
        data: book
      })
    };

    return {
      addToStack: addToStack,
      getStack: getStack,
      removeFromStack: removeFromStack
    };

  });
