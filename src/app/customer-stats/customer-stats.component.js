(function () {
    'use strict';

    angular
        .module ('app')
        .component ('customerStats', component());


    function component() {

        function componentController(statsService){
            var vm = this;
            init();

            function init(){
                statsService.getCustStats().then(function(res){
                    vm.customerStats = res.data
                })
            }
        }

        return {
            templateUrl: "app/customer-stats/customer-stats.component.html",
            bindings: {},
            controller: componentController,
            controllerAs: ''
        }
    }

} ());