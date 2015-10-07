app.controller('FormCtrl', function ($scope, toaster){
	$scope.share.menu = 'form';
	$scope.bing = function(){
		toaster.pop('success', 'title', 'body');
	}
})