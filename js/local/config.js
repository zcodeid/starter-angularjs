app.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
    $stateProvider

    .state('app', {
        url: '/',
        templateUrl: 'tpl/app.html',
        abstract: true
    })

    .state('app.home', {
    	url: '',
        templateUrl: 'tpl/home.html',
        controller: function ($scope){
        	$scope.share.menu = 'home';
        }
    })

    .state('app.about', {
    	url: 'about',
        template: '<h1>About</h1>',
        controller: function ($scope){
        	$scope.share.menu = 'about';
        }
    })

    .state('app.help', {
    	url: 'help',
        template: '<h1>Help</h1>',
        controller: function ($scope){
        	$scope.share.menu = 'help';
        }
    })

    .state('app.employee', {
    	url: 'employee',
    	templateUrl: 'tpl/employee.html',
    	controller: 'EmployeeCtrl'
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
