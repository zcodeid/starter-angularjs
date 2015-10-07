app.controller('LoginCtrl', function ($scope, $state){
	$scope.signin = function (){
		$state.go('app.home')
	}
});


app.controller('RegisterCtrl', function ($scope){

});