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

    .state('profile', {
        url: '/profile',
        templateUrl: 'assets/tpl/profile.html'
    })

    .state('wakaf', {
        url: '/wakaf',
        templateUrl: 'assets/tpl/wakafMaps.html'
    })

    .state('zcode', {
        url: '/zcode',
        templateUrl: 'assets/tpl/zcode.html'
    });

    $urlRouterProvider.otherwise('/home');
});
