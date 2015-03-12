var bikeProject = angular.module('bikeProject', ['ui.router', 'firebase']);

bikeProject.config(function($stateProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html"
  });

  $stateProvider.state('bikes', {
    url: "/bikes",
    templateUrl: "partials/bikes.html",
    controller: 'BikesCtrl'
  });

  $stateProvider.state('bikes.repairs', {
    url: "/:bikeId",
    templateUrl: "partials/bikes.repairs.html",
    controller: 'RepairsCtrl'
  });
});
