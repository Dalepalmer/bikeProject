bikeProject.controller('RepairsCtrl', function RepairsCtrl($scope, $stateParams, $firebase, $firebaseObject, $firebaseArray, BikesFactory, UtilitiesFactory){

  $scope.UtilitiesFactory = UtilitiesFactory;
  $scope.BikesFactory = BikesFactory;

  $scope.bikes = BikesFactory.bikesRef;
  $scope.bike = UtilitiesFactory.findById($stateParams.bikeId);

  var repairRef = new Firebase("//boiling-fire-9537.firebaseio.com/Bikes/" + $scope.bike.$id + "/Repairs")
  var syncRepairRef = $firebaseArray(repairRef);

  $scope.addRepair = function() {
    debugger;
    $scope.bike = UtilitiesFactory.findById($stateParams.bikeId);
    var newBikeRepair = syncRepairRef.$add({
      repair: $scope.repairName
    })
    $scope.repairName = null;

  }
});
