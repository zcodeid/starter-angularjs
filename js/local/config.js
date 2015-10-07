app.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
    $stateProvider

    .state('app', {
        url: '/',
        templateUrl: 'tpl/app.html',
        controller: function($scope, $state) {
        	$state.transitionTo('app.home');
        }
    })

    .state('app.home', {
        templateUrl: 'tpl/home.html',
        controller: function ($scope){
        	$scope.share.menu = 'home';
        }
    })

    .state('app.about', {
        template: '<h1>About</h1>',
        controller: function ($scope){
        	$scope.share.menu = 'about';
        }
    })

    .state('app.help', {
        template: '<h1>Help</h1>',
        controller: function ($scope){
        	$scope.share.menu = 'help';
        }
    })

    .state('login', {
        url: '/login',
        templateUrl: 'tpl/login.html',
        controller: 'LoginCtrl',
        data: {
        	css: 'css/local/login.css'
        }
    })

    .state('register', {
        url: '/register',
        templateUrl: 'tpl/register.html',
        data: {
        	css: 'css/local/login.css'
        }
    })

    .state('app.form', {
    	templateUrl: 'tpl/demo/form.html',
    	controller: 'FormCtrl'
    })
    ;

    $urlRouterProvider.otherwise('/');
});
