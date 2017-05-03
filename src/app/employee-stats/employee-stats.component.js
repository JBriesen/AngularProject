(function () {
    'use strict';

    angular
        .module ('app')
        .component ('employeeStats', component());


    function component() {

        function componentController(statsService,authService){
            var vm = this;
            vm.isLoggedIn = authService.getAuthStatus();
            init();

            function init(){
                statsService.getEmplStats().then(function(res){
                    vm.employeeStats = res.data
                })
            }
        }

        return {
            templateUrl: "app/employee-stats/employee-stats.component.html",
            bindings: {},
            controller: componentController,
            controllerAs: ''
        }
    }

} ());