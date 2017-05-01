(function () {
    'use strict';
    class userService {
        constructor($http) {
            userService.$inject = ['$http']

            this.employees = $http.get('./app/JSON/employees.json')
                .then(function (res) {
                    return res.data
                });
        }
        findUser(id) {
            return this.employees.then(function (employees) {
                return employees.find(user => user.id == id);
            });
        }

        findUserIndex(id) {
            return this.employees.then(function (employees) {
                return employees.findIndex(user => user.id == id);
            })
        }

        removeUser(id) {
            var index = this.findUserIndex(id);
            this.employees.then(function(employees){
                employees.splice(index,1);
            })
        }

// needs a better update method;
        // editUser(updatedUser) {
        //     var id = updatedUser.id;
        //     this.removeUser(id)
        //     this.saveNewUser(updatedUser)
        // }

        saveNewUser(user) {
            this.employees.then(function(employees){
                employees.push(user);
            })
        }

        getAllUsersList() {
            return this.employees;
        }

        getUserList(searchTerm) {
            return this.data.users.filter(function (user) {
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

