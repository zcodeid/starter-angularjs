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
    'chart.js',
    'oc.lazyLoad'
]);

app.run(function($rootScope, $location, $state, $localStorage, $anchorScroll, $stateParams) {
    $rootScope.$on('$stateChangeStart', function(event, toState) {

    });
});

app.controller("MainCtrl", function($scope) {
    $scope.share = {};
});
