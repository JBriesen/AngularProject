(function () {
    'use strict';

    angular
        .module ('userDetail')
        .component ('userDetail', component());


    function component() {

        function componentController(){
            var vm = this;
            vm.username = "Test User Name";
            vm.age = 5;
            
            init();

            function init(){

            }
        }

        return {
            bindings: {},
            templateUrl: "app/user-list/user-detail/user-detail.html",
            controller: componentController,
            controllerAs: ''
        }
    }

} ());