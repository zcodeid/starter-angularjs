app.controller('LoginCtrl', function($scope, $state, toaster, AuthSvc, localStorageService) {
    $scope.form = {};
    $scope.login = function() {
        var data = angular.copy($scope.form);
        AuthSvc.login(data).then(function(res) {
            $scope.form = {};
            localStorageService.set('token', res.data.id);
            $scope.share.isLogged = true;
            $state.go('home');
        }, function(res) {
        	toaster.pop('error', '', res.data.error.message);
        });
    }
});


app.controller('RegisterCtrl', function($scope) {

});