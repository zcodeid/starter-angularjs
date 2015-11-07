app.config(function($stateProvider, $urlRouterProvider, $httpProvider, JQ_CONFIG) {
    $stateProvider.state('landing', {
        url: '/x',
        controller: 'LandingCtrl',
        templateUrl: 'assets/tpl/landing.html',
        resolve: ['uiLoad', function(uiLoad) {
            return uiLoad.load(JQ_CONFIG.landing);
        }]
    })

    .state('app', {
        url: '/',
        templateUrl: 'assets/tpl/app.html',
        resolve: ['uiLoad', function(uiLoad) {
            return uiLoad.load(JQ_CONFIG.adminlte);
        }],
        controller: function($scope) {},
    })

    .state('home', {
        url: '/home',
        templateUrl: 'assets/tpl/home.html',
        resolve: ['uiLoad', function(uiLoad) {
            return uiLoad.load(JQ_CONFIG.adminlte);
        }],
        controller: function($scope) {
            $scope.share.menu = 'home';
        }
    })

    .state('login', {
        url: '/login',
        templateUrl: 'assets/tpl/login.html',
        controller: 'LoginCtrl'
    })

    .state('muwakif', {
        url: '/muwakif',
        templateUrl: 'assets/tpl/muwakif.html'
    })

    .state('forms', {
        url: '/forms',
        templateUrl: 'assets/tpl/forms.html'
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

    .state('app.dosenForm', {
        url: '/dosenForm/:id/:type',
        templateUrl: 'assets/tpl/dosenForm.html',
        controller: 'DosenCtrl'
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

    $urlRouterProvider.otherwise('/home');
});
