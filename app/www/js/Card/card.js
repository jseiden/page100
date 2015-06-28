"use strict";

angular.module("starter.cards", [])

.controller("CardsCtrl", function($scope, BookChoices, $ionicSideMenuDelegate, $rootScope){
  //prevent side menu from dragging out with cards
  $ionicSideMenuDelegate.canDragContent(false);
  // retrieves books from the database
  $scope.getBooks = function(userId, count){
    BookChoices.getBooks(userId, count)
      .then(function(books){
        $scope.cards = books;
        $scope.currentCard = books[books.length - 1];
      });
  };

  $scope.userId = $rootScope.currentUser.id;
  $scope.getBooks($scope.userId, 10);

  // Handles book swiping 
  $scope.cardSwipedLeft = function(index) {
   console.log("Left swipe", index);
 };

 // Adds card to stack when user swipes right
  $scope.cardSwipedRight = function(index) {
    console.log("Right swipe", index);
    BookChoices.addToStack($scope.userId, $scope.cards[index]);
    $scope.currentCard = $scope.cards[index - 1];
  };

  $scope.cardDestroyed = function(index) {
    $scope.currentCard = $scope.cards[index - 1];
    console.log("Card removed");
  };

  $scope.cardPartialSwipe = function(amt){
    console.log(amt);
  };

  $scope.clicked = false;
});
