angular.module('chatApp').directive('roomList', ['$routeParams', 'chatService', function ($routeParams, chatService) {
    return {
        restrict: 'E',
        templateUrl: 'components/roomlist/roomList.html',

        scope: {},
        controller: function ($scope) {
            if(!chatService.isConnected()) {
                chatService.connect();
            }

            chatService.getRooms().then(function(rooms) {
                $scope.rooms = rooms;
            });
        }
    };
}]);