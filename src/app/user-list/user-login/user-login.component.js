
(function () {
    'use strict';

    angular
        .module ('app')
        .component ('userLogin', component());


    function component() {

        function componentController(){
            var vm = this;
            
            init();

            function init(){

            }
        }

        return {
            bindings: {},
            templateUrl:"app/user-list/user-login/user-login.html",
            controller: componentController,
            controllerAs: ''
        }
    }

} ());