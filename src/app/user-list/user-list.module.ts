import {UserListComponent} from './user-list.component';
import * as angular from 'angular';

export const UserListModule = angular
        .module('userList', [
        //     'userDetail',
        //     'userEdit',
        //     'createUser',
        //     'userLogin'
                    ])
        .component('userList', UserListComponent );