(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (function () {
        'use strict';
        //Upgraded component
        //upgradeAdapter.upgradeNg1Component('a1Upgradable')
        angular
            .module('app')
            .component('navigation', component());
        function component() {
            function componentController(authService, $rootScope, $state) {
                //     var vm = this;
                //     vm.loggedIn = false;
                //     vm.logOut = logout;
                //     vm.username = "";
                //     init();
                //     function init() {
                //     }
                //     function logout(){
                //         vm.loggedIn = false;
                //         $rootScope.$broadcast("loggedInStatus",{data:false})
                //         $state.go("home");
                //         authService.removeUserAuthenticated();
                //     }
                //     $rootScope.$on("loggedInStatus", function (event,response) {
                //             vm.loggedIn = response.isLoggedIn;
                //             vm.username = response.username;
                //         });
                // }
                return {
                    bindings: {},
                    templateUrl: "app/navigation/navigation.html",
                    controller: componentController,
                };
            }
        }
        ();
        ;
    });
});
