app.controller('RoleCtrl', function($scope, $state, ngTableParams, toaster, RoleSvc) {
    $scope.detail = function(data) {
        $state.go('roleForm', {
            role: data
        });
    }

    $scope.tableRole = new ngTableParams({
        page: 1,
        count: 5,
        sorting: {
            name: 'asc'
        }
    }, {
        total: 0,
        getData: function($defer, params) {
            RoleSvc.count().then(function(n) {
                params.total(n.data.count);
                var limit = params.count();
                var offset = (params.page() - 1) * limit;
                RoleSvc.get($scope.query, offset, limit).then(function(res) {
                	console.log(res);
                    $defer.resolve(res.data);
                });
            });
        }
    });
});

app.controller('RoleFormCtrl', function($scope, $state, $stateParams, toaster, RoleSvc) {
    $scope.title = $stateParams.role == null ? 'Add Role' : 'Edit Role';
    $scope.isEdit = $stateParams.role != null;
    $scope.form = $stateParams.role;
    $scope.save = function() {
        var data = angular.copy($scope.form);
        RoleSvc.save(data).then(function(res) {
            $state.go('role');
            toaster.pop('success', '', 'Success save role');
        });
    }
    $scope.delete = function() {
        RoleSvc.delete($scope.form).then(function (res){
        	$state.go('role');
        });
    }
});
