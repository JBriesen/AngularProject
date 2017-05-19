System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var UserListModule;
    return {
        setters: [],
        execute: function () {
            exports_1("UserListModule", UserListModule = angular
                .module('userList', [
                'userDetail',
                'userEdit',
                'createUser',
                'userLogin'
            ])
                .component('hello', {
                template: `<h1>Hi from angular 1</h1>`
            }));
        }
    };
});
