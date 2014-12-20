'use strict';

/**
 * @ngdoc function
 * @name mywalletApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mywalletApp
 */
angular.module('mywalletApp').controller('MainCtrl',['$scope','myStorage', function ($scope,myStorage) {
	$scope.Reset = function(){
		myStorage.resetStorage();
	};
}]);
