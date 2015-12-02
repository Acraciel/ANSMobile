angular.route('security/identity/login', function(
    $log,
    $Configuration,
    $Localization,
    $state,
    $Identity,
    $scope,
    $ionicPopup
)
{
    //Application Information
    $scope.signature = $Configuration.get("application");
    $scope.user = {};


    $scope.login = function(loginType)
    {
        var email = function()
        {
            
            var credentials = {
                username: $scope.user.name,
                password: $scope.user.password
            };


            $Identity.authenticate(credentials)
                .success(function(data)
                {
                    $state.go("app.home");
                })
                .error(function(error)
                {
                    var error_message = $Localization.get("ERR.API.UNAVAILABLE");
                    if (error && error.error_description)
                    {
                        error_message = error.error_description;
                    }

                   var alertPopup = $ionicPopup.alert({
                     title: 'Acceso Denegado',
                     template: error_message
                   });
                   alertPopup.then(function(res) {
                  
                   });

 
                });
        };

        switch (loginType)
        {
            case 'ingresar':
            case 'email':
                email();
                break;
        }


    };

});
