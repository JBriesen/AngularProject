(function () {
    'use strict';

    class userService {
        constructor() {
            this.data = {
                users: [
                    { name: 'Mila', age: '32', occupation: 'Tester', pw:'111' },
                    { name: 'Jason', age: '22', occupation: 'Developer', pw:'111'},
                    { name: 'Angela', age: '27', occupation: 'Developer',pw:'111' },
                    { name: 'Eric', age: '37', occupation: 'Tester',pw:'111' },
                    { name: 'John', age: '45', occupation: 'Tester',pw:'111' },
                    { name: 'Lisa', age: '56', occupation: 'Sales',pw:'111' },
                    { name: 'Brenda', age: '21', occupation: 'Sales',pw:'111' },
                    { name: 'Brian', age: '36', occupation: 'Tester',pw:'111' }
                ]
            };
        }

        removeUser(index) {
            this.data.users.splice(index, 1);
        }

        editUser(index, user) {
            this.data.users[index] = user;
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

        saveNewUser(user) {
            console.log('saving user');
            this.data.users.push(user);
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