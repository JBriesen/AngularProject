import { EmployeeStatsComponent } from './employee-stats.component';
import * as angular from 'angular';
import Filter from '../../filters/sumOfValue.filter';
export const EmployeeStatsModule = angular
    .module('employeeStats', [])
    .component('employeeStats', EmployeeStatsComponent)
    .filter('sumOfValue',Filter);