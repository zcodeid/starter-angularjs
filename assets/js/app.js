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

app.constant('config', {
    url: 'http://localhost:3000/api'
});

app.config(['$compileProvider', function($compileProvider) {
    $compileProvider.debugInfoEnabled(false);
}]);

app.config(
    ['$controllerProvider', '$compileProvider', '$filterProvider', '$provide',
        function($controllerProvider, $compileProvider, $filterProvider, $provide) {

            // lazy controller, directive and service
            app.controller = $controllerProvider.register;
            app.directive = $compileProvider.directive;
            app.filter = $filterProvider.register;
            app.factory = $provide.factory;
            app.service = $provide.service;
            app.constant = $provide.constant;
            app.value = $provide.value;
        }
    ]);

app.config(function(localStorageServiceProvider) {
    localStorageServiceProvider.setPrefix('api');
    localStorageServiceProvider.setStorageType('localStorage'); // localStorage or sessionStorage
});

app.run(function($rootScope, $location, $state, $anchorScroll, $stateParams) {
    $rootScope.$on('$stateChangeStart', function(event, toState) {

    });
});

app.controller("MainCtrl", function($scope, localStorageService) {
    var token = localStorageService.get('token');
    $scope.share = {
    	isLogged: token != null
    };

    $scope.logout = function (){
    	localStorageService.set('token', null);
    	$scope.share.isLogged = false;
    }
});
