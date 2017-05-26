import * as angular from 'angular';
import { Ng1AppModule } from '../app.ng1.module'

export default function Filter() {
    return FilterFn;

    function FilterFn(data, key) {
        if (angular.isUndefined(data) || angular.isUndefined(key)) {
            return 0;
        }
        var sum = 0;
        angular.forEach(data, function (value) {
            sum = sum + parseInt(value[key]);
        })
        return sum;
    }
}
