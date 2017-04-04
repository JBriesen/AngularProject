(function () {
    'use strict';

    angular
        .module('userDetail')
        .component('userDetail', component());


    function component() {

        function componentController() {
            var vm = this;
            var userDetails = {
                "user": {
                    username: "user",
                    age: 25
                },
                "user2": {
                    username: "user2",
                    age: 37
                },
                "user3": {
                    username: "user3",
                    age: 25
                },
                "user4": {
                    username: "user4",
                    age: 37
                }
            }


            vm.employees = userDetails;
            console.log(vm)

            init();

            function init() {
            }
        }

        return {
            bindings: {
                users: '=',
            },
            templateUrl: "app/user-list/user-detail/user-detail.html",
            controller: componentController,
            controllerAs: ''
        }
    }

}());