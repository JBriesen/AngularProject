(function () {
    'use strict';

    angular
        .module ('app')
        .component ('userEdit', component());


    function component() {

        function componentController($routeParams, userService, $location){
            var vm = this;
            var index = $routeParams.id;

            vm.saveUserDetails = saveUserDetails;
            vm.cancelEditUser = cancelEditUser;
            console.log('userEdit')
            init();

            function init(){
                var user = userService.getUserDetails(index);
                vm.user = user;
            }

            function saveUserDetails(){
                var user = vm.user;
                console.log('save user details')
                console.log(index);
                console.log(user);
                //userService.editUser(index,user);
            }
            function cancelEditUser(){
                $location.path('/home/');
            }

        }

        return {
            bindings: {},
            templateUrl:"app/user-list/user-edit/user-edit.html",
            controller: componentController,
            controllerAs: ''
        }
    }
} ());