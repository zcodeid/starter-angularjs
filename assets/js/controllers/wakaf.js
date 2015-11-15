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
        $state.go('forms', {
            wakaf: d
        });
    }

    $scope.delete = function(d) {
        var c = confirm("Apakah yakin akan menghapus data muwakif?");
        if (c) WakafSvc.delete(d).then(function(res) {
            toaster.pop('success', '', 'Berhasil menghapus data muwakif');
        });
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



app.controller('WakafDetailCtrl', function($scope, $interval, $stateParams, $state, WakafSvc, toaster) {
    $scope.wakaf = $stateParams.wakaf;
    $scope.approve = function (){
    	$scope.wakaf.status = 1;
    	$scope.submit();
    }
    $scope.submit = function() {
        var data = $scope.wakaf;
        WakafSvc.save(data).then(function() {
            $scope.wakaf = {};
            toaster.pop('success', 'Update Wakaf', 'Success update data wakaf');
            $state.go('muwakif');
        }, function(res) {
            toaster.pop('error', 'Update Wakaf', 'Failed update data wakaf');
        });
    }
});
