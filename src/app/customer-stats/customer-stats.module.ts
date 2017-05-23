import { CustomerStatsComponent } from './customer-stats.component';
import * as angular from 'angular';
export const CustomerStatsModule = angular
    .module('customerStats', [])
    .component('customerStats', CustomerStatsComponent);
