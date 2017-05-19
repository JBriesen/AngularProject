System.register(["./user-list/user-list.module", "./app.config", "@angular/upgrade/static", "./app.component", "./home/home.module"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var user_list_module_1, app_config_1, static_1, app_component_1, home_module_1, Ng1AppModule;
    return {
        setters: [
            function (user_list_module_1_1) {
                user_list_module_1 = user_list_module_1_1;
            },
            function (app_config_1_1) {
                app_config_1 = app_config_1_1;
            },
            function (static_1_1) {
                static_1 = static_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (home_module_1_1) {
                home_module_1 = home_module_1_1;
            }
        ],
        execute: function () {
            exports_1("Ng1AppModule", Ng1AppModule = angular
                .module('app', ['ngRoute', 'ui.router', user_list_module_1.UserListModule.name, home_module_1.HomeModule.name])
                .config(app_config_1.AppConfig)
                .directive('appComponent', static_1.downgradeComponent({
                component: app_component_1.AppComponent,
                inputs: ['name'],
                outputs: ['onButtonClick']
            })));
            // .run(function ($rootScope, $location, $state, authService) {
            //     console.log("test");
            //     $rootScope.$on('$stateChangeStart', function (e, toState, toParams
            //         , fromState, fromParams) {
            //          console.log("state")   
            //         var isLogin = toState.name === "login";
            //         if (isLogin) {
            //             console.log(toState.name)
            //             return; 
            //         }
            //         var homePage = toState.name === "home";
            //         if(homePage){
            //             return;
            //         }
            //         var authStatus = authService.getAuthStatus();
            //         if (authStatus === false) {
            //             console.log('redirect');
            //             e.preventDefault(); // stop current execution
            //             $state.go('login'); // go to login
            //         }
            //     });
            // }); //, 'navigation', 'ngRoute', 'ui.router', 'ui.router.state.events']);
        }
    };
});
