(function () {
    'use strict';

    class userService {
        constructor() {
            this.data = {
                users: [
                    { name: 'Mila', age: '32', occupation: 'Tester' },
                    { name: 'Jason', age:'22', occupation: 'Developer' },
                    { name: 'Angela', age: '27', occupation: 'Developer' },
                    { name: 'Eric', age: '37', occupation: 'Tester' }
                ]
            };
        }
        getUsers() {
            console.log('returning users');
            return this.data;
        }

        createUser(name, age) {
            console.log('create users');
            var user = {
                name: name,
                age: age
            }
            this.data.users.push(user);
        }

        //create an array of users
        createUsers([name, age]) {
            console.log('create users');
            var user = {
                name: name,
                age: age
            }
            this.data.users.push.apply([user, age]);
        }

        getUserList() {
            return this.data;
        }

        getUserDetails(index) {
            return this.data.users[index];
        }
    }

    angular.module('app').service('userService', userService);
}());