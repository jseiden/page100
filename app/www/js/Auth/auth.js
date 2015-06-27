"use strict";
angular.module("starter.auth", [])

.controller("AuthCtrl", function ($scope, Auth, $rootScope, $location, $window){
  $scope.user = {};

  $scope.signin = function () {
    // $rootScope.currentUser = $scope.user;
    Auth.signin($scope.user)
      .then(function (data) {
        $window.localStorage.setItem("com.starter", data.token);
        $rootScope.currentUser = {
          username: data.userInfo.username,
          id: data.userInfo._id
        }
        $location.path("/app/main");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  $scope.signup = function () {
    // $rootScope.currentUser = $scope.user;
    Auth.signup($scope.user)
      .then(function (data) {
        $window.localStorage.setItem("com.starter", data.token);
        $rootScope.currentUser = {
          username: data.userInfo.username,
          id: data.userInfo._id
        }
        $location.path("/stack");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  $scope.signout = function () {
    $window.localStorage.removeItem("com.starter");
    delete $rootScope.currentUser;
    // $rootScope.currentUser = "undefined";
    $location.path("/signin");
  };

  $scope.isAuth = function(){
    return !!$window.localStorage.getItem("com.starter");
  };

  // $scope.refreshUser = function (cb){

  // }
});
