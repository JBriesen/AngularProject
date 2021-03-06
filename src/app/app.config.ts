//AppConfig.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];

export function AppConfig($locationProvider, $stateProvider, $urlRouterProvider) {
            $locationProvider.html5Mode({
                enabled: true
            });
            $stateProvider.
                state('home', {
                    template: `
                        <home></home>
                    `,
                    url: '/home',
                }).
                state('userList', {
                    template: '<user-list></user-list>',
                    url: '/userList/'
                }).
                state('userDetail', {
                    template: '<user-detail></user-detail>',
                    url: '/userList/:id'
                }).
                state('userEdit', {
                    template: '<user-edit></user-edit>',
                    url: '/userList/edit/:id',
                }).
                state('createUser', {
                    template: '<create-user></create-user>',
                    url: '/createUser'
                }).
                state('login', {
                    template: '<user-login></user-login>',
                    url: '/login'
                })
            $urlRouterProvider.otherwise('/home');
        }