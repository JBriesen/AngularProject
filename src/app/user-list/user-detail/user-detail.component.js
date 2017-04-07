(function () {
    'use strict';

    angular
        .module('userDetail')
        .component('userDetail', component());


    function component() {

        function componentController($routeParams,userService) {

            var vm = this;
            vm.getUserDetails = getUserDetails;
            vm.createUsers = createUsers;
            vm.usersArr = [];
            function createUsers(){
                userService.createUser('John','22');
            }

            function getUserDetails(){
                console.log("test User details");
                var data = userService.getUsers();
                vm.usersArr = data.users
            }

            init();

            function init() {
            }
        }

        return {
            bindings: {
            },
            templateUrl: "app/user-list/user-detail/user-detail.html",
            controller: componentController,
            controllerAs: ''
        }
    }

}());