(function () {
    'use strict';

    angular
        .module('userDetail')
        .component('userDetail', component());

    function component() {

        function componentController($routeParams, userService, $location) {
            var userId = $routeParams.id;
            var vm = this;
            vm.editUser = editUser;
            vm.removeUser = removeUser;

            init();

            function init() {

                userService.getUserDetails(userId)
                    .then(
                    function (result) {
                        vm.userDetails = result
                    });
            }

            function editUser() {
                console.log('edit user');
                console.log(userId);
                $location.path('/userList/edit/' + userId);
            }

            function removeUser() {
                console.log('remove user');
                userService.removeUser(userId);
                $location.path('/userList/')
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