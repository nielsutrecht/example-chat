angular.module('chatApp').directive('chat', ['$routeParams', 'chatService', function ($routeParams, chatService) {
    return {
        restrict: 'E',
        templateUrl: 'components/chat/chat.html',

        scope: {},
        controller: function ($scope) {
            chatService.getChat($routeParams.room).then(function(chat) {
                $scope.chat = chat;
            });
        }
    };
}]);