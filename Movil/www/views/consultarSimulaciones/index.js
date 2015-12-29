angular.route('app.consultarSimulaciones/index', function(
    $scope,
    $state,
    $log,
    $timeout,
    $Api
)
{
    
    $scope.form = {};
    //---------------------------------------------------
    // Get Data
    $Api.read("/Cotizar").success(function(data)
    {
        //Set Items to List
        $scope.cotizar = data;

    });

    // Layout Actions
    $scope.navigateTo = function()
    {
        // Navigate
        $timeout(function()
        {
            $state.go('app.consultarSimulaciones/list');
        }, 300);
    };


});
