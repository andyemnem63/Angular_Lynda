var myApp = angular.module('myApp', []);

myApp.controller('MyController', ['$scope', '$http' , function ($scope, $http) {
    $http.get('/api').then(function (response) {
        $scope.artist = response.data;
        $scope.artistOrder = 'name';
    });
}]);
