angular.route('app.cotizar/index', function(
    $scope,
    $state,
    $log,
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
});
