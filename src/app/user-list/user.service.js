(function () {
    'use strict';

    class userService {
        constructor() {
            this.data = {
                users: [
                    { name: 'Mila', age: '32', occupation: 'Tester', password: '111' ,id:1},
                    { name: 'Jason', age: '22', occupation: 'Developer', password: '111' ,id:2},
                    { name: 'Angela', age: '27', occupation: 'Developer', password: '111' ,id:3},
                    { name: 'Eric', age: '37', occupation: 'Tester', password: '111' ,id:4},
                    { name: 'John', age: '45', occupation: 'Tester', password: '111' ,id:5},
                    { name: 'Lisa', age: '56', occupation: 'Sales', password: '111' ,id:6},
                    { name: 'Brenda', age: '21', occupation: 'Sales', password: '111' ,id:7},
                    { name: 'Brian', age: '36', occupation: 'Tester', password: '111' ,id:8},
                    { name: 'Brianer', age: '36', occupation: 'Tester', password: '111' ,id:9}
                ]
            };
        }
        findUser(id){
           return this.data.users.find(user => user.id == id);
        }

        findUserIndex(id){
           return this.data.users.findIndex(user => user.id == id);
        }

        removeUser(id) {
            var index = this.findUserIndex(id)
            this.data.users.splice(index,1);
        }

        editUser(updatedUser) {
         var index = this.findUserIndex(updatedUser.id);
         this.data.users[index] = updatedUser;
        }
        saveNewUser(user) {
            console.log('saving user');
            this.data.users.push(user);
        }
        getAllUsersList(){
            return this.data.users;
        }

        getUserList(searchTerm) {
            return this.data.users.filter(function(user) {
                return user.name.includes(searchTerm);
            });
        }

        getUserDetails(userId) {
            console.log(userId)
            return this.findUser(userId)
        }
        //TODO need to fix this check
        checkLogin(username, password) {
            for (var i = 0; i < this.data.users.length; i++) {
                //console.log(this.data.users[i])
                if (this.data.users[i].name == username && this.data.users[i].password == password) {
                    return this.data.users[i].id;
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