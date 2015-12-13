angular.module('app.layouts').controller('DefaultLayoutController', function(
    $scope,
    $state,
    $log,
    $Configuration,
    $timeout,
    $Identity,
    $Api
)
{
    //------------------------------------------------------------------------------------
    // Model
    $scope.config = {
        application: $Configuration.get("application"),
        menu:  [
        {
            route: "app.home",
            icon:  "",
            label: "Inicio",
            active: true
        },
        {
            route: "app.consultarPoliza",
            icon: "",
            label: "Consultar Pólizas"
        },
        {
            route: "app.consultarSimulaciones",
            icon: "",
            label: "Consultar Simulaciones"
        }, 
        {
            route: "app.consultarCliente",
            icon: "",
            label: "Clientes"
        }, 
        {
            route: "app.simulaciones",
            icon: "",
            label: "Simulaciones"
        }, 
        {
            route: "app.emitir",
            icon: "",
            label: "Emitir"
        }, 
        {
            route: "app.notifications",
            icon: "",
            label: "Notificaciones"
        }, 
        {
            route: "app.miEjecutivo",
            icon: "",
            label: "Mi Ejecutivo"
        }
        ]
    };

    //------------------------------------------------------------------------------------
    // Layout Actions
    $scope.navigateTo = function(item)
    {
        //----------------------------------- 
        //Mark as Active
        angular.forEach($scope.config.menu, function(item)
        {
            item.active = false;
        });
        item.active = true;

        //-----------------------------------
        // Navigate
        $timeout(function()
        {
            $state.go(item.route);
        }, 300);
    };
    // Action's
    $scope.logOut = function()
    {
        $Identity.logOut();
    };
    // Get Data
    $Api.read("/Profile").success(function(data)
    {
        //Set Profile
        $scope.profile = data;

    });

});
