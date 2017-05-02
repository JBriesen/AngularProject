(function () {
    'use strict';
    class authService {
        constructor() {
            this.userIsAuthenticated = false;
        }

        setUserAuthenticated(user){
            this.userIsAuthenticated = true;
            this.user = user;
            console.log("user is authenticated");
            console.log(user);
        }
        getUserAuthenticated(){
            return this.user
        }
    }
    angular.module('app').service('authService', authService);
}());