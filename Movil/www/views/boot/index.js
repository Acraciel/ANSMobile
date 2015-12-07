angular.route('boot/index', function(
    $scope,
    $state,
    $log,
    $Api,
    $Configuration,
    $location,
    $timeout
) {
    //---------------------------------------------------
    // Get Data
    $Api.read("/Configuration/State").success(function(data) {
        if (data.state == "sync") {
            var url = $Configuration.get("application");
            $timeout(function() {
                $location.url(url.home);
            }, 2500);

        }

    });

});