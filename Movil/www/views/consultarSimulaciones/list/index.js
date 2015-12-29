angular.route('app.consultarSimulaciones/list/index', function(
    $scope,
    $state,
    $log,
    $Api,
    $stateParams,
    CustoModal
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

    $scope.pdf = function(numero){
        CustoModal.open(numero+"@correo.cl");
    }
});
