angular.route('app.consultarCliente/baseClientes/index', function(
    $scope,
    $state,
    $log,
    $Api
)
{
    $scope.elem = {};

    //---------------------------------------------------
    // Get Data
    $Api.read("/Polizas").success(function(data)
    {
        //Set Items to List
        $scope.polizas = data;

    });

    $scope.next = function(elem){
        $state.go('app.consultarCliente/basePolizasCliente/index',{nombre:elem.nombre});
    }

    $scope.back = function(){
        $state.go('app.consultarCliente');
    }

   
});
