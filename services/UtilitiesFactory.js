bikeProject.factory('UtilitiesFactory', function(BikesFactory, $firebaseObject) {
  var factory = {};

  factory.findById = function(id) {
    var bike = BikesFactory.bikesRef.child(id);
    return $firebaseObject(bike);

  };

    return factory;
});
