'use strict';

/**
 * @ngdoc function
 * @name mywalletApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mywalletApp
 */
angular.module('mywalletApp').controller('FormCtrl',function ($scope, localStorageService ) {

	var amountsStore = localStorageService.get('amounts');

	$scope.amounts = amountsStore || [];
	$scope.newAmounts = {};

	$scope.$watch('amounts', function () {
      localStorageService.set('amounts', $scope.amounts);
    }, true);

	$scope.addAmount = function (action){
		var areFunds;
		switch(action) {
		    case 'entry':
		        $scope.newAmounts.transaction = 'entry';
		        break;
		    case 'withdrawal':
		        $scope.newAmounts.transaction = 'withdrawal';
		        areFunds = $scope.checkFunds($scope.newAmounts.amount);
		        break;
		}

		if(!areFunds){
			$scope.newAmounts.date = Date.now();
			$scope.amounts.push($scope.newAmounts);
			$scope.newAmounts = {};
			$scope.wallet.$setPristine();
			$scope.notFunds = false;
		} else {
			$scope.notFunds = true;
		}
	};

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

	$scope.checkFunds = function(amount){
		if(amount > $scope.totalAmount()){ 
			return true; 
		} else { 
			return false;
		}
	};

	$scope.Reset = function () {
      	$scope.amounts = [];
    };

});
