app.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
    $stateProvider

        .state('landing', {
        url: '/',
        controller: 'LandingCtrl',
        templateUrl: 'assets/tpl/landing.html',
        data: {
            css: 'assets/css/landing-page.css'
        }
    })

    .state('app', {
        url: '/app',
        templateUrl: 'assets/tpl/app.html',
        controller: function($scope, $ocLazyLoad) {
            $ocLazyLoad.load(['plugins/morris/morris.min.js', 'assets/js/pages/dashboard.js', 'assets/js/demo.js']);
        },
        abstract: true
    })

    .state('app.home', {
        url: '',
        templateUrl: 'assets/tpl/home.html',
        controller: function($scope) {
            $scope.share.menu = 'home';
        }
    })

    .state('app.about', {
        url: 'about',
        template: '<h1>About</h1>',
        controller: function($scope) {
            $scope.share.menu = 'about';
        }
    })

    .state('app.help', {
        url: 'help',
        template: '<h1>Help</h1>',
        controller: function($scope) {
            $scope.share.menu = 'help';
        }
    })

    .state('app.employee', {
        url: 'employee',
        templateUrl: 'assets/tpl/employee.html',
        controller: 'EmployeeCtrl'
    })

    .state('login', {
        url: '/login',
        templateUrl: 'assets/tpl/login.html',
        controller: 'LoginCtrl',
        data: {
            css: 'css/local/login.css'
        }
    })

    .state('register', {
        url: '/register',
        templateUrl: 'assets/tpl/register.html',
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
        templateUrl: 'assets/tpl/demo/dropdown.html',
        controller: 'DropdownCtrl'
    })

    .state('demo.button', {
        url: '/button',
        templateUrl: 'assets/tpl/demo/button.html',
        controller: 'ButtonsCtrl'
    })

    .state('demo.form', {
        templateUrl: 'assets/tpl/demo/form.html',
        controller: 'FormCtrl'
    })

    ;

    $urlRouterProvider.otherwise('/');
});
