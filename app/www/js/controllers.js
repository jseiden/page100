"use strict";


angular.module("starter.controllers", [])

.controller("AppCtrl", function($scope, $location){

  $scope.go = function( path ){
    $location.path( path );
  };
})

.controller("StackCtrl", function($scope, BookChoices, $rootScope) {
  $scope.userId = $rootScope.currentUser.id;
  $scope.stack = [];

  $scope.getStack = function( id ) {
    BookChoices.getStack(id)
      .then(function(data){
        $scope.stack = data.stack;
      });
  };

  $scope.removeFromStack = function( id, index ){
    BookChoices.removeFromStack(id, index);
    $scope.getStack($scope.userId);
  };

  $scope.getStack($scope.userId);

})

.directive("noScroll", function(){
  return {
    restrict: "A",
    link: function($scope, $element){
      $element.on("touchmove", function(e){
        e.preventDefault();
      });
    }
  };
})

.controller("IndvBookCtrl", function($scope, $stateParams) {
  console.log($stateParams);
  $scope.indvBook = $stateParams;
})

.controller("FiltersCtrl", function($scope, filterChoices) {
  var userId = 40;
  $scope.genres = [{title: "fantasy", filter: true},
    {title: "horror", filter: false},
    {title: "history", filter: false}
  ];
  $scope.changeFilter = function(){
       filterChoices.changeFilter(userId, $scope.genres.selected);
    };

  $scope.popularLists = [{title: "BestSellers", filter: true},
    {title: "Top 10", filter: false},
    {title: "Top 25", filter: false}
  ];

  // retrieve genres
  $scope.getUserGenres = function(){};

  // update genre filters in database
  $scope.changeUserGenres = function(){};
});
