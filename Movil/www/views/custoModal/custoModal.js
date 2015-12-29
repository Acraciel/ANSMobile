/*------------------------------------------------------
 Company:           Valentys Ltda.
 Author:            Rodrigo Rojas <acraciel@gmail.com> (https://github.com/acraciel)
------------------------------------------------------*/
(function()
{
    var closureScope = null;
    var modal = null;

    //MODAL DIALOG
    angular.module('app.controllers')
        .controller('CustoModalDialogController', function(
            $scope,
            $state,
            $log,
            $timeout,
            $ionicModal
        )
        {
            //-------------------------------------------
            $scope.data = 
                {
                    email: closureScope.email
                };
            // Mode - Do Magic
            $scope.close = function()
            {
                modal.hide();
            };

        });
    // SERVICE
    angular.module("app.services")
        .provider('CustoModal', function()
        {
            var $ref = this;

            this.$get = function(
                $log,
                $q,
                BaseEventHandler,
                $Api,
                $ionicModal
            )
            {
                var self = {};

                //ADD NEW FACTORY
                self.open = function(emailUserDefault)
                {
                    //Open Modal
                    if (emailUserDefault.length > 0)
                    {
                        closureScope = {
                            email: emailUserDefault
                        };
                        //SHOW REWARD PANE
                        $ionicModal.fromTemplateUrl('views/CustoModal/CustoModal.html',
                        {
                            animation: 'slide-in-up'
                        }).then(function(modalDialog)
                        {
                            modal = modalDialog;
                            modal.show();
                        });

                    };
                };

                return self;
            };
        });
})();
