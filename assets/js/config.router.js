app.config(function($stateProvider, $urlRouterProvider, $httpProvider, JQ_CONFIG) {
    $stateProvider.state('app', {
        url: '/',
        templateUrl: 'assets/tpl/app.html',
        controller: function($scope) {},
    })

    .state('home', {
        url: '/home',
        templateUrl: 'assets/tpl/home.html'
    })

    .state('login', {
        url: '/login',
        templateUrl: 'assets/tpl/login.html',
        controller: 'LoginCtrl',
        resolve: {
            deps: ['$ocLazyLoad',
                function($ocLazyLoad) {
                    return $ocLazyLoad.load(['assets/js/controllers/auth.js']);
                }
            ]
        }
    })

    .state('muwakif', {
        url: '/muwakif',
        templateUrl: 'assets/tpl/muwakif.html',
        controller: 'WakafCtrl',
        resolve: {
            deps: ['$ocLazyLoad', function($ocLazyLoad) {
                return $ocLazyLoad.load(['assets/js/controllers/wakaf.js']);
            }]
        }
    })

    .state('forms', {
        url: '/forms',
        params: {
            wakaf: null
        },
        templateUrl: 'assets/tpl/forms.html',
        controller: 'WakafDetailCtrl',
        resolve: {
            deps: ['$ocLazyLoad', function($ocLazyLoad) {
                return $ocLazyLoad.load(['assets/js/controllers/wakaf.js']);
            }]
        }
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
