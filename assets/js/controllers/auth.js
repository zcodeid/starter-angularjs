app.controller('LoginCtrl', function($scope, $state, toaster, AuthSvc, localStorageService) {
    $scope.form = {};
    $scope.login = function() {
        var data = angular.copy($scope.form);
        AuthSvc.login(data).then(function(res) {
            $scope.form = {};
            localStorageService.set('token', res.data.id);
            $scope.share.isLogged = true;
            $state.go('home');
            AuthSvc.getUser(res.data.userId).then(function (res){
            	localStorageService.set('user', res.data);
            	$scope.share.user = res.data;
            });
        }, function(res) {
        	toaster.pop('error', '', res.data.error.message);
        });
    }
});


app.controller('RegisterCtrl', function($scope) {

});