var app = angular.module('app', [
    'ui.router',
    'ngAnimate',
    'ngTable',
    'ngStorage',
    'uiRouterStyles',
    'ui.bootstrap',
    'angular-loading-bar',
    'toaster',
    'oc.lazyLoad',
    'ui.load'
]);

app.constant('config', {
    url: 'http://localhost:3004/api'
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

app.run(function($rootScope, $location, $state, $localStorage, $anchorScroll, $stateParams) {
    $rootScope.$on('$stateChangeStart', function(event, toState) {

    });
});

app.controller("MainCtrl", function($scope) {
    $scope.share = {};
});
