app.controller('LoginCtrl', function($scope, $state, toaster, AuthSvc) {
    $scope.form = {};
    $scope.login = function() {
        var data = angular.copy($scope.form);
        AuthSvc.login(data).then(function(res) {
            $scope.form = {};
            $state.go('home');
        }, function(res) {
        	toaster.pop('error', '', res.data.error.message);
        });
    }
});


app.controller('RegisterCtrl', function($scope) {

});