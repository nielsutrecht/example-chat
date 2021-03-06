angular.module('chatApp').directive('userForm', ['$route', '$routeParams', 'chatService', function ($route, $routeParams, chatService) {
    return {
        restrict: 'E',
        templateUrl: 'components/userform/userForm.html',

        scope: {},
        controller: function ($scope, $log, $rootScope, $location, $http) {
            $scope.userName = '';
            $scope.password = '';

            $scope.login = function() {
                console.log('userForm:login');
                chatService.login($scope.userName, $scope.password);
            }
        }
    };
}]);