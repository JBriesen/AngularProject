(function () {
    'use strict';

    angular
        .module ('app')
        .component ('home', component());


    function component() {

        function componentController(){
            var vm = this;
            
            init();

            function init(){

            }
        }

        return {
            bindings: {},
            templateUrl: "app/home/home.component.html",
            controller: componentController,
            controllerAs: ''
        }
    }

} ());