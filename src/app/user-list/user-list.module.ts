
export const UserListModule = angular
        .module('userList', [
            'userDetail',
            'userEdit',
            'createUser',
            'userLogin'
                    ])
        .component('hello', {
                template: `<h1>Hi from angular 1</h1>`
        });
