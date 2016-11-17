var app = angular.module('App', ['ngRoute'])
.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/main', {templateUrl: 'partials/main.html', controller: 'MainController'})
  .when('/new', {templateUrl: 'partials/new.html', controller: 'NewController'})
  .when('/edit', {templateUrl: 'partials/edit.html'})
  .when('/show', {templateUrl: 'partials/show.html'})
  .otherwise({ redirectTo: '/main' });
}])
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
.factory('PetFactory', ['$http', function($http) {
  var factory = {};
  factory.index = function(callback) {
    $http.get('/pets').then(function(response) {
      // console.log(response);
      callback(response);
    });
  }  
  factory.addPet = function(newPet){
    console.log(newPet);
    // SEND THE NEWPET TO THE SERVER
    $http.post("/pets", newPet);
  };

  return factory;
}]);
