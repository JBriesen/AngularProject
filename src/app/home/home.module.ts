import * as angular from 'angular';

import { HomeComponent } from './home.component';
import { EmployeeStatsModule } from './employee-stats/employee-stats.module';
import { CustomerStatsModule } from './customer-stats/customer-stats.module';

import { downgradeComponent } from "@angular/upgrade/static";
import { CustomerStatsComponentNg2 } from './customer-stats.ng2/customer-stats.component'
import * as SumOfValue from './../filters/sumOfValue.filter';

export const HomeModule = angular
    .module('home', [ EmployeeStatsModule.name, CustomerStatsModule.name])
    .component('home', HomeComponent)
    .directive('customerStats', downgradeComponent({component:CustomerStatsComponentNg2}))
