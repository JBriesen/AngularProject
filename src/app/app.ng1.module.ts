import * as angular from 'angular';
import uirouter from 'angular-ui-router';

import { UserListModule } from './user-list/user-list.module';
import { AppConfig } from './app.config';
import { downgradeComponent } from "@angular/upgrade/static";
import { AppComponent } from "./app.component";
import { HomeModule } from './home/home.module';
import { NavigationModule} from './navigation/navigation.module';

import StatsService from './stats.service';
import AuthService from './app.AuthService';
import UserService from './user-list/user.service';

// import { FilterModule } from './filters/filters.module'

export const Ng1AppModule = angular
    .module('app', [uirouter, UserListModule.name, HomeModule.name, NavigationModule.name])
    .config(AppConfig)
    .service({'StatsService': StatsService,'authService':AuthService, 'userService':UserService})
    // .filter('sumOfValue',FilterModule.filter)
    // // .directive('appComponent', downgradeComponent({ 
    // //     component: AppComponent,
    // //     inputs: ['name'],
    // //     outputs: ['onButtonClick']
    // // }))
    .run(function ($rootScope, $location, $state, authService) {
        console.log("test");
        $rootScope.$on('$stateChangeStart', function (e, toState, toParams
            , fromState, fromParams) {
             console.log("state")   
            var isLogin = toState.name === "login";
            if (isLogin) {
                console.log(toState.name)
                return; 
            }

            var homePage = toState.name === "home";
            if(homePage){
                return;
            }

            var authStatus = authService.getAuthStatus();
            if (authStatus === false) {
                console.log('redirect');
                e.preventDefault(); // stop current execution
                $state.go('login'); // go to login
            }
        });
    }); //, 'navigation', 'ngRoute', 'ui.router', 'ui.router.state.events']);
