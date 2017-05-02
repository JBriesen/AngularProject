
(function () {
    'use strict';

    angular
        .module('app')
        .component('createUser', component());


    function component() {

        function componentController(userService,$location) {
            var vm = this;
            vm.saveNewUser = saveNewUser;

            init();

            function init() {

            }

            function saveNewUser() {
                var user = vm.user;
                console.log('creating new user')
                userService.saveNewUser(user);
                $location.path('/home/')
            }
        }

        return {
            bindings: {},
            templateUrl: "app/user-list/create-user/create-user.html",
            controller: componentController,
            controllerAs: ''
        }
    }

}());