angular.module('app.components')

.directive('custom-modal', function() {
    return {
        restrict: 'A',
        scope: {
            title: '@', // Title While loading
            content: '@' // Legend While loading
        },
        templateUrl: 'bundles/app/components/custom-modal/custom-modal.tpl.html',
        controller: function(
            $scope,
            $atribute,
            $ionicModal
        ) {
            $ionicModal.fromTemplateUrl('modal.html', {
                scope: $scope,
                animation: 'slide-in-up'
            }).then(function(modal) {
                $scope.modal = modal;
            });
            $scope.openModal = function() {
                $scope.modal.show();
            };
            $scope.closeModal = function() {
                $scope.modal.hide();
            };
            //Cleanup the modal when we're done with it!
            $scope.$on('$destroy', function() {
                $scope.modal.remove();
            });
            // Execute action on hide modal
            $scope.$on('modal.hidden', function() {
                // Execute action
            });
            // Execute action on remove modal
            $scope.$on('modal.removed', function() {
                // Execute action
            });
        }
    };
});
