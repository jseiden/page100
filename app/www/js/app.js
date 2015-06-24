"use strict";
// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// "starter" is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of "requires"
// "starter.controllers" is found in controllers.js
angular.module("starter", ["ionic", "starter.auth", "starter.services", "starter.controllers", "ionic.service.deploy", "ionic.contrib.ui.tinderCards"])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
  $stateProvider

  .state("app", {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: "AppCtrl"
  })

  .state("app.signin", {
    url: "/signin",
    views: {
      "menuContent": {
        templateUrl: "templates/signin.html"
      }
    }
  })

  .state("app.signup", {
    url: "/signup",
    views: {
      "menuContent": {
        templateUrl: "templates/signup.html"
      }
    }
  })

  .state("app.main", {
    url: "/main",
    views: {
     "menuContent": {
        templateUrl: "templates/main.html"
      }
    }
  })

  .state("app.filters", {
    url: "/filters",
    views: {
      "menuContent": {
        templateUrl: "templates/filters.html",
        controller: "FiltersCtrl"
      }
    }
  })

  .state("app.accountSettings", {
    url: "/accountSettings",
    views: {
      "menuContent": {
        templateUrl: "templates/accountSettings.html"
      }
    }
  })
    .state("app.stack", {
      url: "/stack",
      views: {
        "menuContent": {
          templateUrl: "templates/stack.html",
          controller: "StackCtrl"
        }
      }
    })

  .state("app.book", {
    url: "/stack/:bookId",
    views: {
      "menuContent": {
        templateUrl: "templates/indvBook.html",
        controller: "IndvBookCtrl"
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise("/app/signin");
  $httpProvider.interceptors.push("AttachTokens");

})
.factory("AttachTokens", function ($window) {
  // this is an $httpInterceptor
  // its job is to stop all out going request
  // then look in local storage and find the user's token
  // then add it to the header so the server can validate the request
  var attach = {
    request: function (object) {
      var jwt = $window.localStorage.getItem("com.shortly");
      if (jwt) {
        object.headers["x-access-token"] = jwt;
      }
      object.headers["Allow-Control-Allow-Origin"] = "*";
      return object;
    }
  };
  return attach;
})
.run(function ($rootScope, $location, Auth) {
  // here inside the run phase of angular, our services and controllers
  // have just been registered and our app is ready
  // however, we want to make sure the user is authorized
  // we listen for when angular is trying to change routes
  // when it does change routes, we then look for the token in localstorage
  // and send that token to the server to see if it is a real user or hasn't expired
  // if it's not valid, we then redirect back to signin/signup
  $rootScope.$on("$routeChangeStart", function (evt, next) {
    if (next.$$route && next.$$route.authenticate && !Auth.isAuth()) {
      $location.path("/signin");
    }
  });
});

