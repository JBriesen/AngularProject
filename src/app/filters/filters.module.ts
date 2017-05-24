import * as angular from 'angular';

// export function SumOfValue(data,key) {
//         return function(sum: number) {
//             if (angular.isUndefined(data) || angular.isUndefined(key)) {
//                 return sum;
//             }
//             else {
//                 angular.forEach(data, function (value) {
//                     sum = sum + parseInt(value[key]);
//                 })
//                 return sum;
//             }
//         }
//     }

module Filter {
    'use strict';

    export class SumFilter {

        constructor() {
        }

        filter(data,key):number {
            var result = 0;
            if (angular.isUndefined(data)|| angular.isUndefined(key)) {
                return result;
            }
            else{
                angular.forEach(data,function(value){
                    result =result + parseInt(value[key])
                })
                return result;
            }
        }
    }
}

// export const FilterModule = 
// angular.module('filter').filter('sumOfValue',Filter.SumFilter)
