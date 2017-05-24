import { UserDetailComponent } from './user-detail.component';
import * as angular from 'angular';
export const UserDetailModule = angular
    .module('userDetail', [])
    .component('userDetail', UserDetailComponent);