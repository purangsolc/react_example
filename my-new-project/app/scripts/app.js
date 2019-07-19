'use strict';

/**
 * @ngdoc overview
 * @name reactLibCallerApp
 * @description
 * # reactLibCallerApp
 *
 * Main module of the application.
 */
angular.module('reactLibCallerApp', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch'
]).config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl',
      controllerAs: 'main'
    })
    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl',
      controllerAs: 'about'
    })
    .otherwise({
      redirectTo: '/'
    });
});
angular.module('reactLibCallerApp').factory('MyLib', function($window){
  console.log($window.MyLib);
  if(!$window.MyLib){
  }
  return $window.MyLib;
});