angular.module('chatApp').service('chatService', ['$http', '$q', function($http, $q) {
    var stompClient = null;
    var chat = [];
    var chatListeners = [];
    var roomListeners = [];

    function isConnected() {
        return stompClient !== null;
    }

    function connect() {
        var socket = new SockJS('/hello');
        stompClient = Stomp.over(socket);
        stompClient.connect({}, function(frame) {
            stompClient.subscribe('/topic/greetings', function(greeting){
                var message = JSON.parse(greeting.body);
                chat.push(message);
                angular.forEach(chatListeners, function(callback) {
                    callback(message);
                });
            });
        });
    }

    function disconnect() {
        if (isConnected()) {
            stompClient.disconnect();
        }
        stompClient = null;
    }

    function login(name, password) {
        console.log('chatService:login');
        stompClient.send("/app/hello", {}, JSON.stringify({ 'user': name, 'message': 'Hello world!' }));
    }

    function addChatListener(callback) {
        chatListeners.push(callback);
    }

    function addChatListener(callback) {
        roomListeners.push(callback);
    }

    return {
        getRooms: function() {
            return $http.get('json/rooms.json').then(function(response) {
                return response.data;
            });
        },

        getChat: function(room) {
            return $http.get('json/chat.json').then(function(response) {
                return response.data;
            });
        },

        isConnected: isConnected,
        connect: connect,
        login: login
    };
}]);