'use strict';

/**
 * @ngdoc function
 * @name mywalletApp.directives
 * @description
 * Directives of the mywalletApp
 */

var app = angular.module('mywalletApp');

app.directive('amountsTable',function(){
	return{
		restric:'E',
		templateUrl:'views/components/amounts-table.html'
	};
});