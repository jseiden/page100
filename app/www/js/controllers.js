"use strict";


angular.module("starter.controllers", [])

.controller("AppCtrl", function($scope, $location){

  $scope.go = function( path ){
    $location.path( path );
  };
  
})

.controller("StackCtrl", function($scope) {
  $scope.stack = [
    {img: "cover", title: "100 Years of Solitude", id: 1 },
    {img: "cover", title: "Johnny Got His Gun", id: 2 },
    {img: "cover", title: "East of Eden", id: 3 },
    {img: "cover", title: "Zero to One", id: 4 },
    {img: "cover", title: "Invisible Man", id: 5 },
    {img: "cover", title: "Romeo and Juliet", id: 6 }
  ];
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
.controller("CardsCtrl", function($scope){
  var cardTypes = [{image: "http://ecx.images-amazon.com/images/I/81eMMNVkt7L.jpg", title: "East of Eden", author: "John Steinbeck"}, {image: "http://ecx.images-amazon.com/images/I/81mEbZQOrXL.jpg", title: "Great Gatsby", author: "F. Scott Fitzgerald"}, {image: "http://ecx.images-amazon.com/images/I/51tkcSAhSDL.jpg", title: "100 Years of Solitude", author: "Gabriela Garcia Marquez"}];
  $scope.cards = [];
  $scope.currentCard = cardTypes[0];

  $scope.addCard = function(index){
    var newCard = cardTypes[index];
    newCard.id = Math.random();
    $scope.cards.push(angular.extend({}, newCard));
  };

  for(var i = 0; i < cardTypes.length; i++){
    $scope.addCard(i);
  }

  $scope.cardSwipedLeft = function(index) {
   console.log("Left swipe", index);
 };

  $scope.cardSwipedRight = function(index) {
    console.log("Right swipe", index);
  };

  $scope.cardDestroyed = function(index) {
    $scope.cards.splice(index, 1);
    $scope.currentCard = $scope.cards[0];
    console.log("Card removed");
  };

  $scope.cardPartialSwipe = function(amt){
    console.log(amt);
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
