import { HomeComponent } from './home.component';
import * as angular from 'angular';
export const HomeModule = angular
    .module('home', [])
    .component('home', HomeComponent);