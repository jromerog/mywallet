'use strict';

/**
 * @ngdoc function
 * @name mywalletApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mywalletApp
 */

angular.module('mywalletApp').controller('MainCtrl',['$scope','myStorage', function ($scope,myStorage) {
	
	//Load data from amounts
	var store = 'amounts';
	myStorage.createLocalStorage(store);
	myStorage.loadStorage(store);

	$scope.Reset = function(){
		myStorage.resetStorage(store);
	};

}]);
