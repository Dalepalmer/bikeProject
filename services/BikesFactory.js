bikeProject.factory('BikesFactory', function BikesFactory($firebaseArray, $firebaseObject) {
  var factory = {};
  factory.bikesRef = new Firebase("//boiling-fire-9537.firebaseio.com/Bikes");;
  var sync = $firebaseArray(factory.bikesRef);
  factory.bikes = sync;


  factory.addBike = function() {
    factory.bikes.$add({
      name: factory.customerName,
      phone: factory.customerPhone,
      brand: factory.brandName,
      model: factory.modelName,
      year: factory.bikeYear
    });

    factory.customerName = null;
    factory.customerPhone = null;
    factory.brandName = null;
    factory.modelName = null;
    factory.bikeYear = null;
  };

  return factory;
});
