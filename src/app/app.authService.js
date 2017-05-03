(function () {
    'use strict';
    class authService {
        constructor() {
            this.userIsAuthenticated = false;
        }

        setUserAuthenticated(user){
            this.userIsAuthenticated = true;
            this.user = user;
        }
        getUserAuthenticated(){
            return this.user
        }
        getAuthStatus(){
            return this.userIsAuthenticated;
        }

        removeUserAuthenticated(){
            this.userIsAuthenticated = false;
            this.user = {};
        }
    }
    angular.module('app').service('authService', authService);
}());