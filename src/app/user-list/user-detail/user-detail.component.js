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
                    username: "test",
                    age: 25
                },
                "user2": {
                    username: "test2",
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