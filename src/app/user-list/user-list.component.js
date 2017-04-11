(function () {
    'use strict';

    angular
        .module('userList')
        .component('userList', component());

    function component() {

        function componentController(userService,$location) {
            var vm = this;
            vm.getUserList = getUserList;
            vm.createUser = createUser;
            vm.userListArr = [];

            function getUserList() {
                console.log('get user');
                vm.userListArr = userService.getUserList();
                console.log(vm.userListArr);

            }

            function createUser() {
                console.log('creating user')
                $location.path('/createUser/')
            }
        }

        return {
            bindings: {
            },
            templateUrl: "app/user-list/user-list.html",
            controller: componentController,
        }
    }

}());