'use strict';

/**
 * @ngdoc overview
 * @name mywalletApp
 * @description
 * # mywalletApp
 *
 * Main module of the application.
 */
 var app = angular.module('mywalletApp', ['LocalStorageModule', 'ngRoute']);

 /* localStorageServiceProvider to use "ls" as a localStorage name prefix */
app.config(['localStorageServiceProvider', function(localStorageServiceProvider){
  localStorageServiceProvider.setPrefix('ls');
}]);

/* $route service */
app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
	$routeProvider
	.when('/', {
	    templateUrl: 'views/main.html'
	})
	.when('/wallets/', {
		templateUrl: 'views/wallets.html',
		controller: 'WalletsCtrl'
	})
	.when('/wallet/', {
		templateUrl: 'views/form.html',
		controller: 'FormCtrl'
	});
	
	//Hash
	$locationProvider.html5Mode(true);
}]);

/* Storage available to APP */
app.factory('myStorage', ['localStorageService', function(localStorageService){
	return {
		loadStorage:function($key){
			this[$key] = localStorageService.get($key) || [];
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