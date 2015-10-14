app.controller('DemoCtrl', function($scope) {

})


app.controller('DropdownCtrl', function($scope, $log) {
    $scope.items = [
        'The first choice!',
        'And another choice for you.',
        'but wait! A third!'
    ];

    $scope.status = {
        isopen: false
    };

    $scope.toggled = function(open) {
        $log.log('Dropdown is now: ', open);
    };

    $scope.toggleDropdown = function($event) {
        $event.preventDefault();
        $event.stopPropagation();
        $scope.status.isopen = !$scope.status.isopen;
    };
})

app.controller('ButtonsCtrl', function($scope) {
    $scope.singleModel = 1;

    $scope.radioModel = 'Middle';

    $scope.checkModel = {
        left: false,
        middle: true,
        right: false
    };

    $scope.checkResults = [];

    $scope.$watchCollection('checkModel', function() {
        $scope.checkResults = [];
        angular.forEach($scope.checkModel, function(value, key) {
            if (value) {
                $scope.checkResults.push(key);
            }
        });
    });
});


app.controller('FormCtrl', function ($scope, toaster){
	$scope.share.menu = 'form';
	$scope.bing = function(){
		toaster.pop('success', 'title', 'body');
	}
})
