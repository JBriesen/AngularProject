export class StatsService {
    static $inject = ['$http', 'authService'];
    constructor(private $http) {
        this.$http = $http;
    };

    getEmplStats() {
        return this.$http.get('./src/app/JSON/employeeStats.json')
            .then(res => {
            console.log(res);
            return res
        }).catch(error => {
            console.log(error);
        })
    };

    getCustStats() {
        return this.$http.get('./src/app/JSON/customerStats.json')
            .then(res => {
            console.log(" getCustStats "+res);
            return res
        }).catch(error => {
            console.log(error);
        })
    }
}
export default StatsService;