"use strict";

angular.module("starter.cards", [])

.controller("CardsCtrl", function($scope, BookChoices){

  var cardTypes = [{image: "http://ecx.images-amazon.com/images/I/81eMMNVkt7L.jpg", title: "East of Eden", author: "John Steinbeck"}, {image: "http://ecx.images-amazon.com/images/I/81mEbZQOrXL.jpg", title: "Great Gatsby", author: "F. Scott Fitzgerald"}, {image: "http://ecx.images-amazon.com/images/I/51tkcSAhSDL.jpg", title: "100 Years of Solitude", author: "Gabriela Garcia Marquez"}];

  // $scope.getBooks = function(){
  //   BookChoices.getBooks()
  //     .then(function(books){
  //       cardTypes = books;
  //     });
  // };

  // $scope.getBooks();
  $scope.cards = [];
  $scope.currentCard = cardTypes[0];
  $scope.userId = 40;

  $scope.addCard = function(id, img, title, author, genre, sample, amazonLink) {
   var newCard = {_id: id, image: img, title: title, author: author, genre: genre, sample: sample, amazonLink: amazonLink};
   $scope.cards.unshift(angular.extend({}, newCard));
  };

  $scope.addCards = function(userid, count) {
   BookChoices.getBooks(userid, count).then(function(value){
     angular.forEach(value, function(v){
       $scope.addCard(v._id, v.image, v.title, v.author, v.genre, v.sample, v.amazonLink);
     });
     $scope.currentCard = $scope.cards[$scope.cards.length - 1];
     console.log($scope.cards);
   });
  };

  $scope.addCards($scope.userId, 4);

  $scope.cardSwipedLeft = function(index) {
   console.log("Left swipe", index);
 };

  $scope.cardSwipedRight = function(index) {
    console.log("Right swipe", index);
    BookChoices.addToStack($scope.userId, cardTypes[index]);
  };

  $scope.cardDestroyed = function(index) {
    $scope.cards.splice(index, 1);
    $scope.currentCard = $scope.cards[$scope.cards.length - 1];
    console.log("Card removed");
  };

  $scope.cardPartialSwipe = function(amt){
    console.log(amt);
  };

  $scope.clicked = false;
});
