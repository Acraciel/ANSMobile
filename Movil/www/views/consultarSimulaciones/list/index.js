angular.route('app.consultarSimulaciones/list/index', function(
    $scope,
    $state,
    $log,
    $Api,
    $stateParams
)
{
    $scope.elem = {
        estado: "Emitida"
    };
    //---------------------------------------------------
    // Get Data
    $Api.read("/Simulaciones").success(function(data)
    {
        //Set Items to List
        $scope.simulacion = data;

    });
});
