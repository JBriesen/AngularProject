(function () {
    'use strict';

    angular
        .module ('app')
        .component ('userEdit', component());


    function component() {

        function componentController($routeParams, userService, $location){
            var vm = this;
            var userId = $routeParams.id;

            vm.saveUserDetails = saveUserDetails;
            vm.cancelEditUser = cancelEditUser;
            console.log('userEdit')
            init();

            function init(){
                var user = userService.getUserDetails(userId);
                vm.user = angular.copy(user);//Is this needed to prevent 2 way binding?
            }

            function saveUserDetails(){
                var user = vm.user;
                console.log('save user details');
                userService.editUser(user);
            }
            function cancelEditUser(){
                $location.path('/home/');
            }
        }

        return {
            bindings: {
            },
            templateUrl:"app/user-list/user-edit/user-edit.html",
            controller: componentController,
            controllerAs: ''
        }
    }
} ());