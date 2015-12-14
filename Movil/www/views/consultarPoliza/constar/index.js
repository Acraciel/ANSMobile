angular.route('app.consultarPoliza/constar/index/:estado', function(
    $scope,
    $state,
    $log,
    $Api,
    $stateParams
)
{
    $scope.elem = {
        estado: $stateParams.estado
    };
    //---------------------------------------------------
    // Get Data
    $Api.read("/Polizas").success(function(data)
    {
        //Set Items to List
        $scope.polizas = data;

    });
});
