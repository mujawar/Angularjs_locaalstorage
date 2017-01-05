
var app = angular.module('myApp', ['localStorage']);



app.controller('DemoCtrl', function ($scope, $store) {

    $store.bind($scope, 'myForm');

    $scope.clearTest = function(){
        $store.remove('myForm');
    };

    });



























