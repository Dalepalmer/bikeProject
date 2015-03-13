var bikeProject = angular.module('bikeProject', ['ui.router', 'firebase']);

bikeProject.config(function($stateProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html"
  });

  $stateProvider.state('customerBikes', {
    url: "/customerBikes",
    templateUrl: "partials/customerBikes.html",
    controller: 'BikesCtrl'
  });

  $stateProvider.state('customerBikes.repairs', {
    url: "/:bikeId",
    templateUrl: "partials/customerBikes.repairs.html",
    controller: 'RepairsCtrl'
  });
});
