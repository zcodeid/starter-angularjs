app.controller('EmployeeCtrl', function($scope, EmployeeSvc) {
	$scope.test = "Employee controller";
});

app.controller('EmployeeFormCtrl', function($scope, $state, $stateParams, EmployeeSvc) {
	$scope.title = $stateParams.employee == null ? 'Add Employee' : 'Edit Employee';
    $scope.isEdit = $stateParams.employee != null;
    $scope.employeeData = [];

    $scope.save = function(){
    	// $state.go('employee');
    	$scope.employeeData.push($scope.form);
    	console.log($scope.employeeData);
    }


});
