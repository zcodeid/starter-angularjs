app.config(function($stateProvider, $urlRouterProvider, $httpProvider, JQ_CONFIG) {
    $stateProvider.state('app', {
        url: '/x',
        templateUrl: 'assets/tpl/app.html',
        controller: function($scope) {},
    })

    .state('home', {
        url: '/',
        templateUrl: 'assets/tpl/home.html'
    })

    .state('branch', {
        url: '/branch',
        templateUrl: 'assets/tpl/branch.html',
        controller: 'BranchCtrl',
        resolve: {
            deps: ['$ocLazyLoad',
                function($ocLazyLoad) {
                    return $ocLazyLoad.load(['assets/js/controllers/branch.js', 'assets/js/services/branch.js']);
                }
            ]
        }
    })

    .state('branchForm', {
        url: '/branch-form',
        templateUrl: 'assets/tpl/branch.form.html',
        controller: 'BranchFormCtrl',
        resolve: {
            deps: ['$ocLazyLoad',
                function($ocLazyLoad) {
                    return $ocLazyLoad.load(['assets/js/controllers/branch.js', 'assets/js/services/branch.js']);
                }
            ]
        },
        params: {
            branch: null
        }
    })

    .state('employee', {
        url: '/employee',
        templateUrl: 'assets/tpl/employee.html',
        controller: 'EmployeeCtrl'
    })

    .state('employeeForm', {
        url: '/employee-form',
        templateUrl: 'assets/tpl/employee-form.html',
        controller: 'EmployeeFormCtrl'
    })

    .state('customer', {
        url: '/customer',
        templateUrl: 'assets/tpl/customer.html',
        controller: 'CustomerCtrl'
    })

    .state('customerForm', {
        url: '/customer-form',
        templateUrl: 'assets/tpl/customer-form.html',
        controller: 'CustomerFormCtrl'
    })

    .state('car', {
        url: '/car',
        templateUrl: 'assets/tpl/car.html',
        controller: 'CarCtrl'
    })

    .state('carForm', {
        url: '/car-form',
        templateUrl: 'assets/tpl/car-form.html',
        controller: 'CarFormCtrl'
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

    .state('zcode', {
        url: '/zcode',
        templateUrl: 'assets/tpl/zcode.html'
    });

    $urlRouterProvider.otherwise('/');
});
