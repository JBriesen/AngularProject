import { EmployeeStatsComponent } from './employee-stats.component';
//import {filters} from '../filters/filter.module';
import StatsService from '../stats.service'
import * as angular from 'angular';
export const ExployeestatsModule = angular
    .module('employeeStats', [])
    .component('employeeStats', EmployeeStatsComponent)
    .service('statsService',StatsService);
    // .filters('sumOfValue', filters.sumOfValue);