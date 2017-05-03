(function () {
    'use strict';

    angular
        .module('app')
        .component('navigation', component());

    function component() {
        function componentController(authService, $rootScope, $state) {
            var vm = this;
            vm.loggedIn = false;
            vm.logOut = logout;
            vm.username = "";
            init();

            function init() {
                
            }
            function logout(){
                vm.loggedIn = false;
                $rootScope.$broadcast("loggedInStatus",{data:false})
                $state.go("home");
                authService.removeUserAuthenticated();
            }

            $rootScope.$on("loggedInStatus", function (event,response) {
                    vm.loggedIn = response.isLoggedIn;
                    vm.username = response.username;
                });
        }

        return {
            bindings: {},
            templateUrl: "app/navigation/navigation.html",
            controller: componentController,
        }
    }
}());