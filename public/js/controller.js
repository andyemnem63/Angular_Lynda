var artistControllers = angular.module('artistControllers', []);

artistControllers.controller('ListController', ['$scope', '$http' , function ($scope, $http) {
    $http.get('/api').then(function (response) {
        $scope.artist = response.data;
        $scope.artistOrder = 'name';
    });
}]);

artistControllers.controller('DetailsController', ['$scope', '$http' , '$routeParams' , function ($scope, $http, $routeParams) {
    $http.get('/api').then(function (response) {
        $scope.artist = response.data;
        $scope.whichItem = $routeParams.itemId;
    });
}]);
