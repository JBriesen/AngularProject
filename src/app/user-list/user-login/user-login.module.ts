import {UserLoginComponent} from './user-login.component';
import * as angular from 'angular';
export const UserLoginModule = angular
    .module('userLogin', [])
    .component('userLogin',UserLoginComponent);
