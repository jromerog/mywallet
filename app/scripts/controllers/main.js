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
	myStorage.loadStorage(store);

	$scope.section = 1;

	$scope.selectTab = function(tab){
		$scope.section = tab;
	}

	$scope.selectedTab = function(tab){
		return tab === $scope.section;
	};

	$scope.Reset = function(){
		myStorage.resetStorage(store);
	};

}]);
