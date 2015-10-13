app.controller('EmployeeCtrl', function($scope, $modal, ngTableParams, toaster, EmployeeSvc) {
	$scope.share.menu = 'employee';

	$scope.tableEmployee = new ngTableParams({
	    page: 1, // show first page
	    count: 2, // count per page
	    sorting: {
	        name: 'asc' // initial sorting
	    }
	}, {
	    total: 0, // length of data
	    getData: function($defer, params) {
	        EmployeeSvc.get().then(function(res) {
	            var filtered = res.data;
	            params.total(filtered.length);
	            $defer.resolve(filtered.slice((params.page() - 1) * params.count(), params.page() * params.count()));
	        });
	    }
	});

	$scope.add = function() {
	    var modalInstance = $modal.open({
	        templateUrl: 'employee-modal.html',
	        controller: 'EmployeeModal',
	        size: 'md',
	        resolve: {
	            param: function() {
	                return {
	                    employee: {},
	                    isUpdate: false
	                };
	            }
	        }
	    });

	    modalInstance.result.then(function(members) {
	        $scope.members = members;
	        $scope.tableEmployee.reload();
	    });
	};
})


app.controller('EmployeeModal', function($scope, $modalInstance, $filter, EmployeeSvc, toaster, param) {
    $scope.employee = angular.copy(param.employee);
    $scope.isUpdate = param.isUpdate;
    $scope.title = param.isUpdate ? "Update Employee" : "Add Employee";

    $scope.createEmployee = function() {
    	EmployeeSvc.create($scope.model).then(function (res){
        	$modalInstance.close(res.data);
    	})
    }
    $scope.updateEmployee = function() {
        $modalInstance.close(res.data);
    }
    $scope.deleteEmployee = function() {
        $modalInstance.close(res.data);
    }
    $scope.cancelEmployee = function() {
        $modalInstance.dismiss('cancel');
    }

});
