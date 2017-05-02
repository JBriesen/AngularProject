(function () {
    'use strict';

    angular
        .module ('app')
        .component ('customerStats', component());


    function component() {

        function componentController(){
            var vm = this;
            
            init();

            function init(){

            }
        }

        return {
            bindings: {},
            controller: componentController,
            controllerAs: ''
        }
    }

} ());