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
        controller: 'EmployeeCtrl',
        resolve: {
            deps: ['$ocLazyLoad',
                function($ocLazyLoad) {
                    return $ocLazyLoad.load(['assets/js/controllers/employee.js', 'assets/js/services/employee.js']);
                }
            ]
        },
        params: {
            branch: null
        }
    })

    .state('employeeForm', {
        url: '/employee-form',
        templateUrl: 'assets/tpl/employee.form.html',
        controller: 'EmployeeFormCtrl',
        resolve: {
            deps: ['$ocLazyLoad',
                function($ocLazyLoad) {
                    return $ocLazyLoad.load(['assets/js/controllers/employee.js', 'assets/js/services/employee.js']);
                }
            ]
        },
        params: {
            branch: null
        }
    })

    .state('customer', {
        url: '/customer',
        templateUrl: 'assets/tpl/customer.html',
        controller: 'CustomerCtrl',
        resolve: {
            deps: ['$ocLazyLoad',
                function($ocLazyLoad) {
                    return $ocLazyLoad.load(['assets/js/controllers/customer.js', 'assets/js/services/customer.js']);
                }
            ]
        }
    })

    .state('customerForm', {
        url: '/customer-form',
        templateUrl: 'assets/tpl/customer-form.html',
        controller: 'CustomerFormCtrl'
    })

    .state('car', {
        url: '/car',
        templateUrl: 'assets/tpl/car.html',
        controller: 'CarCtrl',
        resolve: {
            deps: ['$ocLazyLoad',
                function($ocLazyLoad) {
                    return $ocLazyLoad.load(['assets/js/controllers/car.js', 'assets/js/services/car.js']);
                }
            ]
        }
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
