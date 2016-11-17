app
.controller('MainController', ['$scope', 'PetFactory', function($scope, PetFactory) {
  PetFactory.index(function(pets) {
    $scope.pets = pets;
  });
}])
.controller('NewController', ['$scope', 'PetFactory', function($scope, PetFactory) {
  $scope.addPet = function() {
    PetFactory.addPet($scope.pet);
  };
}])
.controller('ShowPetController', ['$scope', 'PetFactory', '$route', function($scope, PetFactory, $route) {
  PetFactory.findPet($route.current.params.id)
    .then( function(response){
      $scope.pet = response.data;
    });
}])
.controller('EditPetController', ['$scope', 'PetFactory', '$route', '$location', function($scope, PetFactory, $route, $location) {
  PetFactory.findPet($route.current.params.id)
    .then( function(response){
      $scope.pet = response.data;
    });

  $scope.handleSubmit = function(){
    PetFactory.editPet($scope.pet)
      .then( function(){
        console.log($scope.pet);
        $location.path(`/pets/${$scope.pet._id}`);
      });
  };
}]);
