'use strict';

/**
 * @ngdoc function
 * @name mywalletApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mywalletApp
 */
angular.module('mywalletApp').controller('MainCtrl', [ '$http', '$log' , function ($http, $log) {

	var wallet = this;
	wallet.amounts = [];
	wallet.newAmount = {};
	wallet.action = 'entry';

	$http.get('../data/wallet.json')
		.success(function(data){
			wallet.amounts = data;
		})
		.error(function(){
			$log.log('error');
		});

	wallet.addAmount = function (){
		wallet.newAmount.date = Date.now();
		if(wallet.action === 'entry'){
			wallet.amounts.push(wallet.newAmount);

			wallet.newAmount = {};
		}

		// $http.post('../data/wallet.json')
		// 	.success(function(){
		// 		$log.log('bien');
		// 	})
		// 	.error(function(){
		// 		$log.log('error');
		// 	});


	};
}]);
