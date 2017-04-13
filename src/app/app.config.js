angular.
    module('app').
    config(['$locationProvider', '$routeProvider',
        function config($locationProvider, $routeProvider) {
            $locationProvider.html5Mode({
                enabled:true
            });

            $routeProvider.
                when('/userList/', {
                    template: '<user-list></user-list>',
                }).
                when('/userList/:id', {
                    template: '<user-detail></user-detail>'
                }).
                when('/userList/edit/:id',{
                    template:'<user-edit></user-edit>'
                }).
                when('/createUser',{
                    template:'<create-user></create-user>'
                }).
                when('/login/',{
                    template:'<user-login></user-login>'
                }).
                otherwise('/home');
        }
    ]);