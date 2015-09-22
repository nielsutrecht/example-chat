var appModule = angular.module('chatApp');

appModule.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/home', {
                templateUrl: 'partials/home.html'
            }).
            when('/chat/:room', {
                templateUrl: 'partials/chat.html'
            }).
            otherwise({
                redirectTo: '/home'
            });
    }
]);