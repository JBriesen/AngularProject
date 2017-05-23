import StatsService from '../stats.service';
function componentController(StatsService){
    var vm = this;
    init();

    function init(){
        StatsService.getCustStats().then(function(res){
            vm.customerStats = res.data
        })
    }
}

export const CustomerStatsComponent = {
    templateUrl: "./customer-stats.component.html",
    controller: componentController,
}