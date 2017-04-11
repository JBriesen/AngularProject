(function () {
    'use strict';

    angular
        .module('userDetail')
        .component('userDetail', component());


    function component() {

        function componentController($routeParams,userService, $location) {
            var index = $routeParams.id;           
            var vm = this;
            vm.editUser = editUser;
            vm.removeUser = removeUser;
            
            init();

            function init() {
                var user = userService.getUserDetails(index);
                vm.user = user;
            }

            function editUser(){
                console.log('edit user');
                console.log(index);
                $location.path('/userList/edit/'+index);
            }

            function removeUser(){
                console.log('remove user');
                userService.removeUser(index);
                $location.path('/userList/')
            }


            function addNewUser(){
                console.log('create new user');
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