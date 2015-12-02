angular.route('app.basePolizasCliente/index/:nombre', function(
    $scope,
    $state,
    $log,
    $Api,
    $stateParams
)
{
    $scope.elem = {
        nombre: $stateParams.nombre
    };
    //---------------------------------------------------
    // Get Data
    $Api.read("/Polizas").success(function(data)
    {
        //Set Items to List
        $scope.polizas = data;

    });
});
