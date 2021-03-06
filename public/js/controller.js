var artistControllers = angular.module('artistControllers', ['ngAnimate']);

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

        if($routeParams.itemId > 0) {
            $scope.prevItem = Number($routeParams.itemId)-1;
        }
        else {
            $scope.prevItem = $scope.artist.length -1;
        }

        if($routeParams.itemId < $scope.artist.length -1) {
            $scope.nextItem = Number($routeParams.itemId)+1;
        }
        else {
            $scope.nextItem = 0;
        }
    });
}]);
