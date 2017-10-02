var myApp = angular.module('myApp', [
    'ngRoute',
    'artistControllers'
]);

myApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider.
        when('/list', {
            templateUrl: 'js/partials/list.html',
            controller: 'ListController'
        }).
        when('/details/:itemId', {
            templateUrl: 'js/partials/details.html',
            controller: 'DetailsController'
        })
        .otherwise({
            redirectTo: '/list'
        });
}]);
