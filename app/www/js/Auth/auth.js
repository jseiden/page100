"use strict";
angular.module("starter.auth", [])

.controller("AuthCtrl", function($scope, Auth, $location, $window){
  $scope.user = {};

  $scope.signin = function () {
    // $rootScope.currentUser = $scope.user;
    Auth.signin($scope.user)
      .then(function (token) {
        $window.localStorage.setItem("com.starter", token);
        $location.path("/app/main");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  $scope.signup = function () {
    // $rootScope.currentUser = $scope.user;
    Auth.signup($scope.user)
      .then(function (token) {
        $window.localStorage.setItem("com.starter", token);
        $location.path("/stack");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  $scope.signout = function () {
    $window.localStorage.removeItem("com.starter");
    // $rootScope.currentUser = "undefined";
    $location.path("/login");
  };

  $scope.isAuth = function(){
    return !!$window.localStorage.getItem("com.starter");
  };
});
