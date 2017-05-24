import {CreateUserComponent} from './create-user.component';
import * as angular from 'angular';
 export const CreateUserModule = angular
        .module('createUser', [])
        .component('createUser', CreateUserComponent);