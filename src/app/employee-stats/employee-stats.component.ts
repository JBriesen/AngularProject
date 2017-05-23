import StatsService from '../stats.service';

function componentController(StatsService,authService){
    var vm = this;
    vm.isLoggedIn = authService.getAuthStatus();
    init();

    function init(){
        StatsService.getEmplStats().then(function(res){
            vm.employeeStats = res.data
        })
    }
}

export const EmployeeStatsComponent = {
    // templateUrl: "./employee-stats.component.html",
    template:"test",
    bindings: {},
    controller: componentController,
    controllerAs: ''
}