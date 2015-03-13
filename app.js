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
    url: "/:customerBikeId",
    templateUrl: "partials/bikes.repairs.html",
    controller: 'RepairsCtrl'
  });
});
