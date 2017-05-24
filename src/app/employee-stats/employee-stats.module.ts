import { EmployeeStatsComponent } from './employee-stats.component';
import filters from '../filters/filters.module';

import * as angular from 'angular';
export const ExployeeStatsModule = angular
    .module('employeeStats', [])
    .component('employeeStats', EmployeeStatsComponent)
    .filter(filters)