import { EmployeeStatsComponent } from './employee-stats.component';

import * as angular from 'angular';
export const ExployeeStatsModule = angular
    .module('employeeStats', [])
    .component('employeeStats', EmployeeStatsComponent);