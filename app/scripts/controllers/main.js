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

	$http.get('../data/wallet.json')
		.success(function(data){
			wallet.amounts = data;
		})
		.error(function(){
			$log.log('error');
		});
}]);
