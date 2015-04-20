'use strict';

/**
 * @ngdoc function
 * @name angularTwoModulesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularTwoModulesApp
 */
angular.module('angularTwoModulesApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
