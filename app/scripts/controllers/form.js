'use strict';

/**
 * @ngdoc function
 * @name mywalletApp.controller:FormCtrl
 * @description
 * # FormCtrl
 * Controller of the mywalletApp
 */
angular.module('mywalletApp').controller('FormCtrl',['$scope', 'myStorage', function ($scope,myStorage) {

	$scope.amounts = myStorage.getStorage() || [];
	$scope.newAmounts = {};
	$scope.notFunds;

	//Add amount method
	$scope.addAmount = function (action){
		var areFunds;
		switch(action) {
		    case 'entry':
		        $scope.newAmounts.transaction = 'entry';
		        break;
		    case 'withdrawal':
		        $scope.newAmounts.transaction = 'withdrawal';
		        //Check if we have money enough
		        areFunds = $scope.checkFunds($scope.newAmounts.amount);
		        break;
		}
		//we have funds to make the transaction
		if(!areFunds){
			$scope.newAmounts.date = Date.now();
			$scope.amounts.push($scope.newAmounts);
			myStorage.setStorage($scope.amounts);
			$scope.newAmounts = {};
			$scope.wallet.$setPristine();
			$scope.notFunds = false;
		} else {
			$scope.notFunds = true;
		}
	};

	//Get total amount method
	$scope.totalAmount = function(){
		var total = 0 ;
		angular.forEach($scope.amounts, function(item) {
			switch(item.transaction) {
			    case 'entry':
			        total += item.amount;
			        break;
			    case 'withdrawal':
			        total -= item.amount;
			        break;
			}
		});
		return total;
	};

	//Check if there enough money to make a withdrawal
	$scope.checkFunds = function(amount){
		if(amount > $scope.totalAmount()){ 
			return true; 
		} else { 
			return false;
		}
	};

}]);
