app.controller('BranchCtrl', function($scope, $state, ngTableParams, toaster, BranchSvc) {
    $scope.detail = function(branch) {
        $state.go('branchForm', {
            branch: branch
        });
    }

    $scope.tableBranch = new ngTableParams({
        page: 1,
        count: 2,
        sorting: {
            name: 'asc'
        }
    }, {
        total: 0,
        getData: function($defer, params) {
            BranchSvc.count().then(function(n) {
                params.total(n.data.count);
                var limit = params.count();
                var offset = (params.page() - 1) * limit;
                BranchSvc.get($scope.query, offset, limit).then(function(res) {
                    $defer.resolve(res.data);
                });
            });
        }
    });
});

app.controller('BranchFormCtrl', function($scope, $state, $stateParams, toaster, BranchSvc) {
    $scope.title = $stateParams.branch == null ? 'Add Branch' : 'Edit Branch';
    $scope.isEdit = $stateParams.branch != null;
    $scope.form = $stateParams.branch;
    $scope.save = function() {
        var data = angular.copy($scope.form);
        BranchSvc.save(data).then(function(res) {
            $state.go('branch');
            toaster.pop('success', '', 'Success save branch');
        });
    }
    $scope.delete = function(branch) {
        BranchSvc.delete($scope.form).then(function (res){
        	$state.go('branch');
        });
    }
});
