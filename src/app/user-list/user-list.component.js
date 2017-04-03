(function () {
    'use strict';

    angular
        .module('userList')
        .component('userList', component());


    function component() {

        function componentController() {
            var vm = this;

            init();

            function init() {
                console.log("hello");
            }
        }

        return {
            bindings: {},
            templateUrl: "app/user-list/user-list.html",
            controller: componentController,
            controllerAs: ''
        }
    }

}());