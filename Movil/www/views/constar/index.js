angular.route('app.constar/index', function(
    $scope,
    $state,
    $log,
    $Api
)
{

    //---------------------------------------------------
    // Get Data
    $Api.read("/Polizas").success(function(data)
    {
        //Set Items to List
        $scope.polizas = data;

    });
});
