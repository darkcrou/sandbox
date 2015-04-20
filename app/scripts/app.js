'use strict';

/**
 * @ngdoc overview
 * @name angularTwoModulesApp
 * @description
 * # angularTwoModulesApp
 *
 * Main module of the application.
 */
angular
  .module('angularTwoModulesApp', [
    'ngRoute',
    'ui.sortable'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
