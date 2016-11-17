app
.factory('PetFactory', ['$http', function($http) {
  var factory = {};
  factory.index = function(callback) {
    $http.get('/pets').then(function(response) {
      console.log(response);
      callback(response.data);
    });
  };
  factory.addPet = function(newPet){
    // SEND THE NEWPET TO THE SERVER
    $http.post("/pets", newPet)
      .then(function(response){
        console.log(response);
      });
  };
  factory.findPet = function(id) {
    return $http.get(`/pets/${id}`);
  };

  factory.editPet = function(pet) {
    return $http.put(`/pets/${pet._id}`, pet);
  };

  return factory;
}]);
