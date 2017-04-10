angular.
    module('app').
    config(['$locationProvider', '$routeProvider',
        function config($locationProvider, $routeProvider) {
            $locationProvider.html5Mode({
                enabled:true
            });

            $routeProvider.
                when('/userList/', {
                    template: '<user-list></user-list>'
                }).
                when('/userList/:id', {
                    template: '<user-list-detail></user-list-detail>'
                }).
                when('/test',{
                    template:'<h1>Test</h1>'
                }).
                otherwise('/home');
        }
    ]);