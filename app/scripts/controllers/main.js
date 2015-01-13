'use strict';

/**
 * @ngdoc function
 * @name mywalletApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mywalletApp
 */

angular.module('mywalletApp').controller('MainCtrl',['$scope','$log','myStorage', function ($scope, $log ,myStorage) {
	
	//Load data from amounts
	var store = 'amounts';
	myStorage.loadStorage(store);

	var tabs = {};	

	$scope.selectTab = function(s, tab){
		tabs[s] = tab;
	};

	$scope.selectedTab = function(s, tab){
		return tab === tabs[s];
	};

	$scope.Reset = function(){
		myStorage.resetStorage(store);
	};

}]);
