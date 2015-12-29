angular.route('app.consultarPoliza/index', function(
    $scope,
    $state,
    $log,
    $timeout,
    $Api
)
{
    $scope.formulario = {};

    //---------------------------------------------------
    // Get Data
    $Api.read("/Cotizar").success(function(data)
    {
        //Set Items to List
        $scope.productos = data.productos;
    });

    // Layout Actions
    $scope.navigateTo = function(elem)
    {
        // Navigate
        $timeout(function()
        {
            $state.go('app.consultarPoliza/constar/index',{estado:elem.estado});
        }, 300);
    };
});
