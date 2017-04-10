// (function(){
//     'use strict';

//     angular
//         .module('app')
//         .service('Service', Service)

//     /** @ngInject */
//     function Service(){

//         this.getUsers = getUsers;

//         function getUsers(){
//             this.name = 'serviceName';
//             this.age = 'serviceAge' ;
//             return this;
//         }
//     }

// }());

(function () {
    'use strict';

    class userService {
        constructor() {
            this.data = {
                users: []
            };
        }
        getUsers(){
            console.log('returning users');
            return this.data;
        }

        createUser(name, age) {
            var user = {
                name: name,
                age: age
            }
            this.data.users.push(user);
        }

        getUserList(){
            return this.data;
        }
    }

    angular.module('app').service('userService', userService);
}());