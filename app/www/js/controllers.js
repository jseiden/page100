angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('StackCtrl', function($scope) {
  $scope.stack = [
    { img:'cover', title: '100 Years of Solitude', id: 1 },
    { img:'cover', title: 'Johnny Got His Gun', id: 2 },
    { img:'cover', title: 'East of Eden', id: 3 },
    { img:'cover', title: 'Zero to One', id: 4 },
    { img:'cover', title: 'Invisible Man', id: 5 },
    { img:'cover', title: 'Romeo and Juliet', id: 6 }
  ];
})

.controller('IndvBookCtrl', function($scope, $stateParams) {
});
