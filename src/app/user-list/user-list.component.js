(function () {
    'use strict';

    angular
        .module('app')
        .component('userList', component());

    function component() {

        function componentController(userService, $state) {
            var vm = this;
            vm.getUserList = getUserList;
            vm.createUser = createUser;
            vm.userListArr = [];
            vm.change = change;

            function getUserList() {
                vm.userListArr = userService.getAllUsersList()
            }

            function createUser() {
                console.log('creating user')
                $state.go('createUser');
            }

            function change(searchTerm) {
                if (searchTerm.length > 2) {
                    vm.userListArr = userService.getUserList(searchTerm)
                }
                else {
                    vm.userListArr = [];
                }
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