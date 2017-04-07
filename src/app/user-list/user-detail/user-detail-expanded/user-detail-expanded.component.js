(function () {
    'use strict';

    angular
        .module ('app')
        .component ('userDetailComponent', component());


    function component() {

        function componentController($routeParams){
            
            
            console.log('test params')
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