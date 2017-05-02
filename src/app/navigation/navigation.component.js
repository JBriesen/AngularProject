(function () {
    'use strict';

    angular
        .module ('app')
        .component ('navigation', component());


    function component() {

        function componentController(authService){
            var vm = this;
            
            init();

            function init(){
                this.currentUser = authService.getUserAuthenticated();
            }
        }

        return {
            bindings: {},
            templateUrl: "app/navigation/navigation.html",
            controller: componentController,
        }
    }
} ());