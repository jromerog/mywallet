'use strict';

/**
 * @ngdoc function
 * @name mywalletApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mywalletApp
 */
angular.module('mywalletApp').controller('MainCtrl',function ($scope, $controller) {

 	$controller('FormCtrl', {$scope: $scope});
 	$scope.Reset = function () {
      	$scope.amounts = [];
    };

});
