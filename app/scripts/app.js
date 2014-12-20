'use strict';

/**
 * @ngdoc overview
 * @name mywalletApp
 * @description
 * # mywalletApp
 *
 * Main module of the application.
 */
 var app = angular.module('mywalletApp', ['LocalStorageModule']);

 /* localStorageServiceProvider to use "ls" as a localStorage name prefix */
 app.config(['localStorageServiceProvider', function(localStorageServiceProvider){
  localStorageServiceProvider.setPrefix('ls');
}]);

/* storage available to APP */
app.factory('myStorage', ['localStorageService', function(localStorageService){
	var amountsStore = localStorageService.get('amounts');
	return {
		getStorage:function(){
			return amountsStore;
		},
		setStorage:function($val){
			localStorageService.set('amounts', $val);
		},
		resetStorage:function(){
			this.setStorage([]);
		},
	};
}]);