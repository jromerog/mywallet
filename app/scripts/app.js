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

/* Storage available to APP */
app.factory('myStorage', ['localStorageService', function(localStorageService){
	return {
		createLocalStorage:function($key){
			this[$key] = [];
		},
		loadStorage:function($key){
			this[$key] = localStorageService.get($key);
		},
		setStorage:function($key, $val){
			localStorageService.set($key, $val);
		},
		resetStorage:function($key){
			this[$key] = [];
			this.setStorage($key,this[$key]);
		}
	};
}]);