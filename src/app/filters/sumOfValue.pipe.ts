//import * as angular from 'angular';
//import { Ng1AppModule } from '../app.ng1.module'

// export default function Filter() {
//     return FilterFn;

//     function FilterFn(data, key) {
//         if (angular.isUndefined(data) || angular.isUndefined(key)) {
//             return 0;
//         }
//         var sum = 0;
//         angular.forEach(data, function (value) {
//             sum = sum + parseInt(value[key]); 
//         })
//         return sum;
//     }
// }

import * as angular from "angular";
import { PipeTransform, Pipe } from "@angular/core";

@Pipe({name: 'sumOfValue'})
export class SumOfvaluePipe implements PipeTransform {
  transform(value: string, args: string): number {
            if (angular.isUndefined(value) || angular.isUndefined(args)) {
            return 0;
        }
        var sum = 0;
        angular.forEach(value, function (data) {
            console.log(data[args]);
            sum = sum + parseInt(data[args]); 
        })
        return sum;
    }
}
