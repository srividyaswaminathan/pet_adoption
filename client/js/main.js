var app = angular.module('App', ['ngRoute']).config([
    '$routeProvider',
    function($routeProvider) {
        $routeProvider.when('/main',
        {
            templateUrl: 'partials/main.html',
            controller: 'MainController'
        })
        .when('/new',
        {
            templateUrl: 'partials/new.html',
            controller: 'NewController'
        })
        .when('/edit/:id', {
          templateUrl: 'partials/edit.html',
          controller: 'EditPetController'
        })
        .when('/pets/:id', {
          templateUrl: 'partials/show.html',
          controller: 'ShowPetController'
        })
        .otherwise({redirectTo: '/main'});
    }
]);
