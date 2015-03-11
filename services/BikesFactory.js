bikeProject.factory('BikesFactory', function BikesFactory(){
  var factory = {};
  factory.bikes = [];
  factory.addBike = function() {
    factory.bikes.push({name: factory.customerName, brand: factory.brandName, model: factory.modelName, year: factory.bikeYear,  id: factory.bikes.length + 1, repairs: [] });

    factory.customerName = null;
    factory.brandName = null;
    factory.modelName = null;
    factory.bikeYear = null;
  };

  return factory;
});