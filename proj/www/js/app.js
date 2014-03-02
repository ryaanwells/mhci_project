var MHCI = angular.module("MHCI", ['ngRoute', 'swipe'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
	templateUrl: 'html/main.html',
	controller: 'MainCtrl'
      })
  }]);
