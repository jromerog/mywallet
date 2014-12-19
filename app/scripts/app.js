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
