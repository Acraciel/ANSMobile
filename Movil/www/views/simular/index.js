angular.route('app.simular/index', function(
    $scope,
    $state,
    $log,
    $timeout,
    $Api
)
{
    

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
            $state.go('app.consultarCliente/baseClientes');
        }, 300);
    };


});
