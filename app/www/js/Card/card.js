"use strict";

angular.module("starter.cards", [])

.controller("CardsCtrl", function($scope, BookChoices, $rootScope){
  // var cardTypes = [{image: "http://ecx.images-amazon.com/images/I/81eMMNVkt7L.jpg", title: "East of Eden", author: "John Steinbeck"}, {image: "http://ecx.images-amazon.com/images/I/81mEbZQOrXL.jpg", title: "Great Gatsby", author: "F. Scott Fitzgerald"}, {image: "http://ecx.images-amazon.com/images/I/51tkcSAhSDL.jpg", title: "100 Years of Solitude", author: "Gabriela Garcia Marquez"}];

  $scope.getBooks = function(userId, count){
    BookChoices.getBooks(userId, count)
      .then(function(books){
        $scope.cards = books;
        $scope.currentCard = books[books.length - 1];
      });
  };

  $scope.userId = $rootScope.currentUser.id;
  $scope.getBooks($scope.userId, 10);


  $scope.cardSwipedLeft = function(index) {
   console.log("Left swipe", index);
 };

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
