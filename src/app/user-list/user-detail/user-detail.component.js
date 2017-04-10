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
            vm.saveUser = saveUser;
            
            init();

            function init() {
                var user = userService.getUserDetails(index);
                vm.user = user;
            }

            function editUser(){
                console.log('edit user');
                //userService.editUser()
            }

            function removeUser(){
                console.log('remove user');
                userService.removeUser(index);
                $location.path('/userList/')
            }

            function saveUser(){
                console.log('save changes');
                var user = {
                    name:'test',
                    age:99,
                    occupation:'Tester extraordianier'
                }
                userService.editUser(index,user);
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