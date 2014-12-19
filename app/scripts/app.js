'use strict';

/**
 * @ngdoc overview
 * @name mywalletApp
 * @description
 * # mywalletApp
 *
 * Main module of the application.
 */
 angular.module('mywalletApp', ['LocalStorageModule']).config(['localStorageServiceProvider', function(localStorageServiceProvider){
  localStorageServiceProvider.setPrefix('ls');
}]);
