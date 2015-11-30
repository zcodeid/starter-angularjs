app.controller('UserCtrl', function($scope, $state, ngTableParams, toaster, UserSvc) {
    $scope.detail = function(data) {
        $state.go('userForm', {
            user: data
        });
    }

    $scope.tableUser = new ngTableParams({
        page: 1,
        count: 2,
        sorting: {
            name: 'asc'
        }
    }, {
        total: 0,
        getData: function($defer, params) {
            UserSvc.count().then(function(n) {
                params.total(n.data.count);
                var limit = params.count();
                var offset = (params.page() - 1) * limit;
                UserSvc.get($scope.query, offset, limit).then(function(res) {
                    $defer.resolve(res.data);
                });
            });
        }
    });
});

app.controller('UserFormCtrl', function($scope, $state, $stateParams, toaster, UserSvc) {
    $scope.title = $stateParams.user == null ? 'Add User' : 'Edit User';
    $scope.isEdit = $stateParams.user != null;
    $scope.form = $stateParams.user;
    $scope.save = function() {
        var data = angular.copy($scope.form);
        UserSvc.save(data).then(function(res) {
            $state.go('user');
            toaster.pop('success', '', 'Success save user');
        });
    }
    $scope.delete = function() {
        UserSvc.delete($scope.form).then(function (res){
        	$state.go('user');
        });
    }
});
