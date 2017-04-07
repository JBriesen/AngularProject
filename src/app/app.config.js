angular.
    module('app').
    config(['$locationProvider', '$routeProvider',
        function config($locationProvider, $routeProvider) {
            $locationProvider.html5Mode({
                enabled:true
            });

            $routeProvider.
                when('/userList/', {
                    template: '<user-list class="col-xs-6"></user-list>'
                }).
                when('/userList/:id', {
                    template: '<user-list class="col-xs-6"></user-list>'
                }).
                when('/test',{
                    template:'<h1>Test</h1>'
                }).
                otherwise('/home');
        }
    ]);