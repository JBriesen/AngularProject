import {UserListComponent} from './user-list.component';
import {UserDetailModule} from './user-detail/user-detail.module';
import {UserEditModule} from './user-edit/user-edit.module';
import {CreateUserModule} from './create-user/create-user.module';
import {UserLoginModule} from './user-login/user-login.module';

import * as angular from 'angular';

export const UserListModule = angular
        .module('userList', [
            UserDetailModule.name,
            UserEditModule.name,
            CreateUserModule.name,
            UserLoginModule.name
                    ])
        .component('userList', UserListComponent );