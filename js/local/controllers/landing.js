app.controller('LandingCtrl', function ($scope, $location, $anchorScroll){
	
	$scope.gotoAnchor = function (anchor){
		if ($location.hash() !== anchor){
			$location.hash(anchor);
		}else{
			$anchorScroll();
		}
	}


})