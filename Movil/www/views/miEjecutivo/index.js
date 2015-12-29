angular.route('app.miEjecutivo/index', function(
    $scope,
    $state,
    $log,
    $Api,
    $stateParams
)
{
    $scope.elem = {
        
    };
    //---------------------------------------------------
    // Get Data
    $Api.read("/Ejecutivos").success(function(data)
    {
        //Set Items to List
        $scope.ejecutivos = data;

    });
});
