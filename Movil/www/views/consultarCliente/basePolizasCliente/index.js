angular.route('app.consultarCliente/basePolizasCliente/index/:nombre', function(
    $scope,
    $state,
    $log,
    $Api,
    $stateParams,
    CustoModal
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
    $scope.pdf = function(persona){
        CustoModal.open("correo@"+persona+".cl");
    }
});
