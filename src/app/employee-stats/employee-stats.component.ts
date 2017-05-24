import StatsService from '../stats.service';
import AuthService from '../app.authService';

function componentController(StatsService,authService){
    var vm = this;
    init();

    function init(){
        vm.isLoggedIn = authService.getAuthStatus();
        console.log(vm.isLoggedIn)
        console.log('employeeStats');
        StatsService.getEmplStats().then(function(res){
            vm.employeeStats = res.data
        })
    }
}

export const EmployeeStatsComponent = {
    templateUrl: "./employee-stats.component.html",
    controller: componentController,
}