'use strict';

/**
 * @ngdoc function
 * @name angularTwoModulesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularTwoModulesApp
 */
angular.module('angularTwoModulesApp')
  .controller('MainCtrl', function ($scope) {
    $scope.marks = [];
    $scope.addMark = function () {
    	$scope.marks.push($scope.newMark);
    	$scope.newMark = '';
    };
    $scope.removeMark = function (index) {
    	$scope.marks.splice(index, 1);
    }
});