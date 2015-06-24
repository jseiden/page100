"use strict";
angular.module("starter.services", [])

  .factory("Auth", function($http){
    var signin = function (user) {
        return $http({
          method: "POST",
          url: "/api/users",
          data: user
        })
        .then(function (resp) {
          return resp.data.token;
        });
      };

    var signup = function (user) {
      return $http({
        method: "POST",
        url: "/api/users",
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

  });
