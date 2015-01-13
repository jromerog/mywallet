'use strict';

/**
 * @ngdoc function
 * @name mywalletApp.controller:FormCtrl
 * @description
 * # WalletCtrl
 * Controller of the mywalletApp
 */
angular.module('mywalletApp').controller('WalletsCtrl',['$scope','myStorage', function ($scope,myStorage) {

	$scope.createWallet = function(){
		myStorage.resetStorage($scope.walletName);
		// $scope.create.$setPristine();
	};


}]);
