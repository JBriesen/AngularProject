(function () {
    'use strict';

    class userService {
        constructor() {
            this.data = {
                users: [
                    { name: 'Mila', age: '32', occupation: 'Tester', password: '111' },
                    { name: 'Jason', age: '22', occupation: 'Developer', password: '111' },
                    { name: 'Angela', age: '27', occupation: 'Developer', password: '111' },
                    { name: 'Eric', age: '37', occupation: 'Tester', password: '111' },
                    { name: 'John', age: '45', occupation: 'Tester', password: '111' },
                    { name: 'Lisa', age: '56', occupation: 'Sales', password: '111' },
                    { name: 'Brenda', age: '21', occupation: 'Sales', password: '111' },
                    { name: 'Brian', age: '36', occupation: 'Tester', password: '111' }
                ]
            };
        }

        removeUser(index) {
            this.data.users.splice(index, 1);
        }

        editUser(index, user) {
            this.data.users[index] = user;
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
        //TODO need to fix this check
        checkLogin(username, password) {
            for (var i = 0; i < this.data.users.length; i++) {
                //console.log(this.data.users[i])
                if (this.data.users[i].name == username && this.data.users[i].password == password) {
                    return i;
                    break;
                }
                else if (this.data.users[i].name == username && this.data.users[i].password != password) {
                    return -1;
                    break;
                }
            }
            return -2;
        }
    }

    angular.module('app').service('userService', userService);
}());