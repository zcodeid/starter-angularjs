app.factory('EmployeeSvc', function ($q){
	var employees = [];
	return {
		get: function (){
			var d = $q.defer();
			d.resolve({
				data: employees
			});
			return d.promise;
		},
		create: function (o){
			var d = $q.defer();
			employees.push(o);
			d.resolve({
				data: employees
			});
			return d.promise;
		}
	};
});