angular.module('app')


.constant('JQ_CONFIG', {
    raphael: ['plugins/raphael/raphael-min.js'],
    morris: ['plugins/morris/morris.min.js', 'plugins/morris/morris.css'],
    sparkline: ['plugins/sparkline/jquery.sparkline.min.js'],
    jvectormap: [
        'plugins/jvectormap/jquery-jvectormap-1.2.2.min.js',
        'plugins/jvectormap/jquery-jvectormap-world-mill-en.js',
        'plugins/jvectormap/jquery-jvectormap-1.2.2.css'
    ],
    knob: ['plugins/knob/jquery.knob.js'],
    moment: ['plugins/moment/moment.min.js'],
    daterangepicker: [
        'plugins/daterangepicker/daterangepicker.js',
        'plugins/daterangepicker/daterangepicker-bs3.css'
    ],
    datepicker: [
        'plugins/datepicker/bootstrap-datepicker.js',
        'plugins/datepicker/datepicker3.css'
    ],
    wysi: [
        'plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.all.min.js',
        'plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css'
    ],
    slimscroll: ['plugins/slimScroll/jquery.slimscroll.min.js'],
    fastclick: ['plugins/fastclick/fastclick.min.js'],
    adminlte: [
        'plugins/jQuery/jQuery-2.1.4.min.js',
        'plugins/jquery-ui/jquery-ui.min.js',
        'plugins/bootstrap/js/bootstrap.min.js',
        'assets/js/app.ui.min.js',
        'plugins/bootstrap/css/bootstrap.min.css',
        'plugins/iCheck/flat/blue.css',
        'assets/css/AdminLTE.min.css',
        'assets/css/skins/_all-skins.min.css'
    ],
    landing: [
        'plugins/bootstrap/css/bootstrap.min.css',
        'assets/css/landing-page.css'
    ]
})

.config(['$ocLazyLoadProvider', function($ocLazyLoadProvider) {
    // We configure ocLazyLoad to use the lib script.js as the async loader
    $ocLazyLoadProvider.config({
        debug: true,
        events: true,
        modules: [{
            name: 'messages',
            files: ['plugins/angular/angular-messages.js']
        }, {
            name: 'chart',
            files: [
                'plugins/angular/chart/angular-chart.css',
                'plugins/angular/chart/Chart.js',
                'plugins/angular/chart/angular-chart.js'
            ]
        }]
    });
}]);
