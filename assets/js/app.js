var app = angular.module('app', [
    'ui.router',
    'ngAnimate',
    'ngTable',
    'LocalStorageModule',
    'uiRouterStyles',
    'ui.bootstrap',
    'angular-loading-bar',
    'toaster',
    'oc.lazyLoad',
    'ui.load'
]);

app.config(['$compileProvider', function ($compileProvider) {
    $compileProvider.debugInfoEnabled(false);
}]);

app.config(function(localStorageServiceProvider) {
    localStorageServiceProvider.setPrefix('api');
    localStorageServiceProvider.setStorageType('localStorage');//or sessionStorage
});

app.run(function($rootScope, $location, $state, $localStorage, $anchorScroll, $stateParams) {
    $rootScope.$on('$stateChangeStart', function(event, toState) {
    	
    });
});

app.controller("MainCtrl", function($scope) {
    $scope.share = {};
});
