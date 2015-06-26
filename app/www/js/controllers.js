"use strict";


angular.module("starter.controllers", [])

.controller("AppCtrl", function($scope, $location){

  $scope.go = function( path ){
    $location.path( path );
  };
})

.controller("StackCtrl", function($scope, BookChoices) {
  $scope.userId = 1;
  $scope.stack = [];
  // TO DO: connect to user specific stack.
  // $scope.getStack = function(){
  //   $scope.stack = StackServices.getProperty();
  // };

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

  // Test Data
  // $scope.stack = [
  //   {img: "cover", title: "100 Years of Solitude", id: 1 },
  //   {img: "cover", title: "Johnny Got His Gun", id: 2 },
  //   {img: "cover", title: "East of Eden", id: 3 },
  //   {img: "cover", title: "Zero to One", id: 4 },
  //   {img: "cover", title: "Invisible Man", id: 5 },
  //   {img: "cover", title: "Romeo and Juliet", id: 6 }
  // ];
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

.controller("FiltersCtrl", function($scope) {
  $scope.genres = [{title: "fantasy", filter: true},
    {title: "horror", filter: false},
    {title: "history", filter: false}
  ];

  $scope.popularLists = [{title: "BestSellers", filter: true},
    {title: "Top 10", filter: false},
    {title: "Top 25", filter: false}
  ];

  // retrieve genres
  $scope.getUserGenres = function(){};

  // update genre filters in database
  $scope.changeUserGenres = function(){};
});
