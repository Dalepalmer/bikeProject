bikeProject.controller('BikeCtrl', function BikeCtrl($scope, $stateParams, $firebase, $firebaseObject, $firebaseArray, BikesFactory, UtilitiesFactory) {

  $scope.UtilitiesFactory = UtilitiesFactory;
  $scope.bike = UtilitiesFactory.findById($stateParams.bikeId);

  $scope.BikesFactory = BikesFactory;

});
