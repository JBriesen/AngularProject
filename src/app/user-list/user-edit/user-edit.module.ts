import {UserEditComponent} from './user-edit.component';
import * as angular from 'angular';

export const UserEditModule = angular
        .module('userEdit', [])
        .component('userEdit',UserEditComponent);