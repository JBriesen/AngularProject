import { NavigationComponent } from './navigation.component';
import * as angular from 'angular';
export const NavigationModule = angular
    .module('navigation', [])
    .component('navigation', NavigationComponent);