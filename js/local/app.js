var app = angular.module('app', [
	'ui.router',
	'ngAnimate',
	'ngTable',
	'ngStorage',
	'uiRouterStyles',
	'ui.bootstrap',
	'angular-loading-bar',
	'toaster',
	'ngMessages',
	'chart.js'
]);

app.run(function($rootScope, $state, $localStorage) {
    $rootScope.$on('$stateChangeStart', function(event, toState) {
        
    });
});

app.controller("MainCtrl", function ($scope){
	$scope.share = {};
});