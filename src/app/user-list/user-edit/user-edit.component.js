(function () {
    'use strict';

    angular
        .module('app')
        .component('userEdit', component());


    function component() {

        function componentController($stateParams, $state,userService, authService) {
            var vm = this;
            var userId = $stateParams.id;
            vm.saveUserDetails = saveUserDetails;
            vm.cancelEditUser = cancelEditUser;
            vm.currentUser = authService.getUserAuthenticated();
            console.log('userEdit')
            init();

            function init() {
                var user = userService.getUserDetails(userId)
                console.log(user);
                vm.user = {};
                vm.user.username = user.username;
                vm.user.age = user.age;
                vm.user.job = user.job;
                vm.user.lastName = user.lastName;
                vm.user.firstName = user.firstName;
                vm.user.id = user.id;
            }

            function saveUserDetails(user) {
                console.log('save user details');
                userService.editUser(user);
                $state.go('userDetail',{id:user.id})

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