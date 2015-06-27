"use strict";

angular.module("starter.cards", [])

.controller("CardsCtrl", function($scope, BookChoices, $rootScope){
  var cardTypes;

  // var cardTypes = [{image: "http://ecx.images-amazon.com/images/I/81eMMNVkt7L.jpg", title: "East of Eden", author: "John Steinbeck"}, {image: "http://ecx.images-amazon.com/images/I/81mEbZQOrXL.jpg", title: "Great Gatsby", author: "F. Scott Fitzgerald"}, {image: "http://ecx.images-amazon.com/images/I/51tkcSAhSDL.jpg", title: "100 Years of Solitude", author: "Gabriela Garcia Marquez"}];

  $scope.getBooks = function(userId, count){
    BookChoices.getBooks(userId, count)
      .then(function(books){
        $scope.cards = books;
        $scope.currentCard = books[0]
      });
  };

  $scope.userId = $rootScope.currentUser.id;
  $scope.getBooks($scope.userId, 10);

  //
  // $scope.addCard = function(index){
  //   var newCard = cardTypes[index];
  //   newCard.id = Math.floor(Math.random() * 5);
  //   // cardTypes[index]._id;
  //   $scope.cards.push(angular.extend({}, newCard));
  // };
  //
  // for(var i = 0; i < cardTypes.length; i++){
  //   $scope.addCard(i);
  // }

  $scope.cardSwipedLeft = function(index) {
   console.log("Left swipe", index);
 };

  $scope.cardSwipedRight = function(index) {
    console.log("Right swipe", index);
    // TO DO: Check data passed to addToStack, e.g. index or entire book data
    BookChoices.addToStack($scope.userId, cardTypes[index]);
  };

  $scope.cardDestroyed = function(index) {
    $scope.cards.splice(index, 1);
    $scope.currentCard = $scope.cards[0];
    console.log("Card removed");
  };

  $scope.cardPartialSwipe = function(amt){
    console.log(amt);
  };

  $scope.clicked = false;
});
