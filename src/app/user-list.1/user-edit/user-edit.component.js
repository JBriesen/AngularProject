(function () {
    'use strict';

    angular
        .module('app')
        .component('userEdit', component());


    function component() {

        function componentController($routeParams, userService, $location) {
            var vm = this;
            var userId = $routeParams.id;

            vm.saveUserDetails = saveUserDetails;
            vm.cancelEditUser = cancelEditUser;
            console.log('userEdit')
            init();

            function init() {
                var user = userService.getUserDetails(userId)
                    .then(function (response) {
                        user = response;
                        vm.user = {};
                        vm.user.name = user.username;
                        vm.user.age = user.age;
                        vm.user.occupation = user.job;
                        vm.user.id = user.id;
                    })
            }

            function saveUserDetails(user) {

                console.log('save user details');
                userService.editUser(user);
                $location.path('/userList/' + user.id)

            }
            function cancelEditUser() {
                $location.path('/home/');
            }
        }

        return {
            bindings: {
            },
            templateUrl: "app/user-list/user-edit/user-edit.html",
            controller: componentController,
            controllerAs: ''
        }
    }
}());