import { HomeComponent } from './home.component';
import { EmployeeStatsModule } from './employee-stats/employee-stats.module';
import { CustomerStatsModule } from './customer-stats/customer-stats.module';
import * as angular from 'angular';
export const HomeModule = angular
    .module('home', [ EmployeeStatsModule.name, CustomerStatsModule.name])
    .component('home', HomeComponent);