(function () {
    'use strict';
    class statsService {
        constructor($http, authService) {
            this.authService = authService;
            this.customerStats =
                $http.get('./app/JSON/customerStats.json')
                    .then(res => {
                        console.log(res);
                        //this.customerStats = res.data;
                        return res
                    }).catch(error => {
                        console.log(error);
                    })

            this.employeeStats =
                $http.get('./app/JSON/employeeStats.json')
                    .then(res => {
                        console.log(res);
                        //this.customerStats = res.data;
                        return res
                    }).catch(error => {
                        console.log(error);
                    })
        }

        getCustStats() {
            return this.customerStats.then(function (res) {
                console.log(res);
                return res;
            })
        }

        getEmplStats() {
            return this.employeeStats.then(function (res) {
                console.log(res);
                return res;
            })
        }
    }
    statsService.$inject = ['$http', 'authService']
    angular.module('app').service('statsService', statsService);
}());