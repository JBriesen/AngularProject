import * as angular from 'angular';

angular.module('app').filter('sumOfValue', (data,key) => {
    return (sum: number) => {
        if (angular.isUndefined(data) || angular.isUndefined(key)) {
            return sum;
        }
        else {
            angular.forEach(data, function (value) {
                sum = sum + parseInt(value[key])
            })
            return sum;
        }
    }
});

