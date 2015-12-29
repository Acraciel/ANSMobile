angular.route('app.home/index', function(
    $scope,
    $state,
    $log,
    $Api,
    $interval,
    $timeout,
    $Identity,
    $ionicNavBarDelegate
)
{
    //----------------------------------------
    // FIX ISSUE NAVBAR ALIGN LEFT WITHOUT PADDING
    $ionicNavBarDelegate.showBar(false);
    var delay = $timeout(function()
    {
        $ionicNavBarDelegate.align("left");
        $ionicNavBarDelegate.showBar(true);
        
    }, 350);
    $scope.$on("$destroy", function()
    {
        $timeout.cancel(delay);
    });
    //----------------------------------------


    //---------------------------------------------------
    // Get Data
    $Api.read("/Dashboard").success(function(data)
    {
        //Set Items to List
        $scope.dashboard = data;

    });

    //----------------------------------------
    // Action's
    $scope.create = function()
    {
        $state.go("nomenu.routes/create/start");
    };
    //test();
});
