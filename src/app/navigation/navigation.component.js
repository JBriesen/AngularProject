(function () {
    'use strict';

    angular
        .module ('app')
        .component ('navigation', component());


    function component() {

        function componentController(){
            var vm = this;
            
            init();

            function init(){

            }
        }

        return {
            bindings: {},
            templateUrl: "app/navigation/navigation.html",
            controller: componentController,
        }
    }
} ());