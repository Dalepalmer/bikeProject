bikeProject.controller('BikesCtrl', function BikesCtrl($scope, BikesFactory) {
  $scope.bikes = BikesFactory.bikes;
  $scope.BikesFactory = BikesFactory;
});
