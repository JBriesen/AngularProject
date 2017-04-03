(function () {
    'use strict';

    angular
        .module ('userList')
        .component ('userList', component());


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