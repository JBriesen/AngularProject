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
            vm.change = change;

            function getUserList() {
                userService.getAllUsersList()
                .then(
                    function(result){
                        vm.userListArr = result
                        console.log(result);
                    }
                )
            }

            function createUser() {
                console.log('creating user')
                $location.path('/createUser/')
            }

            function change(searchTerm){
                if(searchTerm.length > 2){
                    console.log("searching for: "+searchTerm);
                    vm.userListArr = userService.getUserList(searchTerm);
                }
                else{
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