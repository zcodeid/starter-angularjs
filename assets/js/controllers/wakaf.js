
app.controller('WakafCtrl', function($scope, $state, $interval, WakafSvc, toaster) {
    $scope.wakafs = [];

    $scope.get = function() {
        WakafSvc.get().then(function(res) {
            $scope.wakafs = res.data;
        }, function(res) {
            $scope.wakafs = [];
        });
    }

    $scope.detail = function(d) {
        $state.go('forms', {wakaf: d});
    }

    $scope.getStatus = function(code) {
        return code === 1 ? "Approved" : "Pending";
    }


    var timer = $interval(function() {
        $scope.get();
    }, 3000);

    $scope.get();
    $scope.$on("$destroy", function() {
        if (timer) {
            $interval.cancel(timer);
        }
    });
});



app.controller('WakafDetailCtrl', function($scope, $interval, $stateParams, WakafSvc, toaster) {
    $scope.wakaf = $stateParams.wakaf;

    $scope.submit = function() {
        var data = $scope.wakaf;
        WakafSvc.save(data).then(function() {
            $scope.wakaf = {};
            toaster.pop('success', 'Update Wakaf', 'Success update data wakaf');
        }, function(res) {
            console.log(res);
            toaster.pop('error', 'Update Wakaf', 'Failed update data wakaf');
        });
    }
});
