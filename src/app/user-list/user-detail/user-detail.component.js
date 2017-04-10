(function () {
    'use strict';

    angular
        .module('userDetail')
        .component('userDetail', component());


    function component() {

        function componentController($routeParams,userService, $location) {
            var index = $routeParams.id;
            
            var vm = this;
            vm.getUserDetails = getUserDetails;
            
            function getUserDetails(){
            
            }
            init();

            function init() {
                var user = userService.getUserDetails(index);
                vm.user = user;
                console.log('init');
                console.log(vm);
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