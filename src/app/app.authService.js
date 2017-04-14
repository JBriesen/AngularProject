(function(){
    'use strict';

    angular
        .module('Module')
        .service('authService', Service)

    /** @ngInject */
    function Service(Dependencies){
        constructor(){
            this.user = {
                name: "",
                type: "",
                loggedInTime:""
            }
        }
        this.getUserStatus = getUserStatus;
        this.setUserStatus = setUserStatus;

        function getUserStatus(){
            return this.user;
        }

        function setUserStatus(username, type){
            this.user.name = username;
            this.user.type = type;
            this.user.loggedInTime = (new Date).toLocaleFormat("%A, %B %e, %Y");
            console.log(this.user);
        }
    }

}());