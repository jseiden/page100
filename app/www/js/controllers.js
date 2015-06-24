"use strict";


angular.module("starter.controllers", [])

.controller("AppCtrl", function($scope, $location){

  $scope.go = function( path ){
    $location.path( path );
  };
})

.controller("AccountCtrl", function($scope){
   $scope.getUsername = Account
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
  var cardTypes = [{image: "http://ecx.images-amazon.com/images/I/81eMMNVkt7L.jpg", title: "East of Eden", author: "John Steinbeck", detail: "THE SALINAS VALLEY is in Northern California. It is a long narrow swale between two ranges of mountains, and the Salinas River winds and twists up the center until it falls at last into Monterey Bay.\n\nI remember my childhood names for grasses and secret flowers. I remember where a toad may live and what time the birds awaken in the summer—and what trees and seasons smelled like—how people looked and walked and smelled even. The memory of odors is very rich."}, {image: "http://ecx.images-amazon.com/images/I/81mEbZQOrXL.jpg", title: "Great Gatsby", author: "F. Scott Fitzgerald"}, {image: "http://ecx.images-amazon.com/images/I/51tkcSAhSDL.jpg", title: "100 Years of Solitude", author: "Gabriela Garcia Marquez"}];
  $scope.cards = [];
  $scope.currentCard = cardTypes[0];

  //-------------------------------START DEMO CODE--------------------------------------------//
  $scope.addCard = function(index){
    var newCard = cardTypes[index];
    newCard.id = Math.random();
    $scope.cards.push(angular.extend({}, newCard));
  };
  //-------------------------------END DEMO CODE--------------------------------------------//
  //-------------------------------START REAL CODE--------------------------------------------//
  // $scope.addCard = function(img, name) {
  //  var newCard = {image: img, title: name};
  //  newCard.id = Math.random();
  //  $scope.cards.unshift(angular.extend({}, newCard));
  // };

  // $scope.addCards = function(count, user) {
  //   $http.get('http://api.randomuser.me/?results=' + count + "&" + user).then(function(value) {
  //     angular.forEach(value.data.results, function (v) {
  //       $scope.addCard(v.user.picture.medium, v.user.email);
  //     });
  //   });
  // };

  // $scope.addCards(10, user);

  //-------------------------------END REAL CODE--------------------------------------------//

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

  $scope.clicked = false;
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
