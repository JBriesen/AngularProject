import { EmployeeStatsComponent } from './employee-stats.component';
import * as angular from 'angular';

export const EmployeeStatsModule = angular
    .module('employeeStats', [])
    .component('employeeStats', EmployeeStatsComponent);