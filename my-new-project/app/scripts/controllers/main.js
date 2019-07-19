'use strict';

/**
 * @ngdoc function
 * @name reactLibCallerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the reactLibCallerApp
 */
angular.module('reactLibCallerApp').controller('MainCtrl', ['$scope','MyLib',function ($scope, MyLib) {
  
  $scope.name = "React Widget";
  
  MyLib.default.widgets.blixtWidget.render('block1');
  MyLib.default.widgets.clockWidget.render('block2');

}]);
