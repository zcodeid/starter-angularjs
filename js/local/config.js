app.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
    $stateProvider

    .state('landing', {
    	url: '/',
    	controller: 'LandingCtrl',
    	templateUrl: 'tpl/landing.html',
    	data: {
    		css: 'css/local/landing-page.css'
    	}
    })

    .state('xlanding', {
    	url: '/x',
    	views: {
    			""					: { templateUrl: "tpl/landing/index.html"},
    	        "header@landing" 	: { templateUrl: "tpl/landing/header.html"},
    	        "about@landing" 	: { templateUrl: "tpl/landing/about.html"},
    	        "contact@landing" 	: { templateUrl: "tpl/landing/contact.html"},
    	        "section-a@landing"	: { templateUrl: "tpl/landing/section-a.html"},
    	        "section-b@landing"	: { templateUrl: "tpl/landing/section-b.html"},
    	        "services@landing"	: { templateUrl: "tpl/landing/services.html"},
    	        "footer@landing"	: { templateUrl: "tpl/landing/footer.html"}
	    },
    	data: {
    		css: 'css/local/landing-page.css'
    	}
    })

    .state('app', {
        url: '/app',
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

	.state('demo', {
		url: '/demo',
		template: '<ui-view/>',
		abstract: true
	})

	.state('demo.dropdown', {
		url: '',
		templateUrl: 'tpl/demo/dropdown.html',
		controller: 'DropdownCtrl'
	})

	.state('demo.button', {
		url: '/button',
		templateUrl: 'tpl/demo/button.html',
		controller: 'ButtonsCtrl'
	})

	.state('demo.form', {
		templateUrl: 'tpl/demo/form.html',
		controller: 'FormCtrl'
	})

	;

    $urlRouterProvider.otherwise('/');
});
