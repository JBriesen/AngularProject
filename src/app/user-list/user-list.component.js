(function () {
    'use strict';

    angular
        .module('userList')
        .component('userList', component());


    function component() {

        function componentController(userService) {
            var vm = this;
            vm.getUserList = getUserList;
            vm.createUser = createUser;
            vm.userListArr = [];

            function getUserList() {
                vm.userListArr = userService.getUserList();
                console.log(vm.userListArr);

            }

            function createUser() {
                console.log('creating user')
                userService.createUser('john', '25');
            }
        }

        return {
            bindings: {
            },
            templateUrl: "app/user-list/user-list.html",
            controller: componentController,
            controllerAs: 'vm'
        }
    }

}());