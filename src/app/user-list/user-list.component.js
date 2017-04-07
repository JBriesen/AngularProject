(function () {
    'use strict';

    angular
        .module('userList')
        .component('userList', component());


    function component() {

        function componentController() {
            var vm = this;
            vm.test = "controller test";

            vm.getUserDetail = function getUserList(){
                console.log("getting user list");
            }
        }

        return {
            bindings: {
                id:'<'
            },
            templateUrl: "app/user-list/user-list.html",
            controller: componentController,
            controllerAs: ''
        }
    }

}());