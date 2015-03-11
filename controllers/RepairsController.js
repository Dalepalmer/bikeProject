bikeProject.controller('RepairsCtrl', function RepairsCtrl($scope, $stateParams, BikesFactory, UtilitiesFactory){
  $scope.bike = UtilitiesFactory.findById(BikesFactory.bikes, $stateParams.bikeId)
  $scope.addRepair = function() {
    $scope.bike.repairs.push({name: $scope.repairName});
    $scope.repairName = null;
  }
});
