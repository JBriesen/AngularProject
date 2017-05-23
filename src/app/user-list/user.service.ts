    import AuthService from '../app.AuthService'
    class UserService {
    static $inject = ['$http', 'authService'];
        employees:any;
        constructor(private $http, public AuthService) {
            this.$http = $http;
            this.AuthService = AuthService;
            this.getData();
        }

        getData(){
            this.$http.get('./src/app/JSON/employees.json')
            .then(res => {
                this.employees = res.data;
            }).catch(error => {
                console.log(error);
            })
        }

        findUser(id) {
                return this.employees.find(user => user.id == id);
        }

        findUserIndex(id) {
                return this.employees.findIndex(user => user.id == id);
        }

        removeUser(id) {
            var index = this.findUserIndex(id);
                this.employees.splice(index, 1);
        }

        //object asign
        editUser(newUserInfo) {
            var id = newUserInfo.id;
            var toUpdateUser = this.findUser(id)
            Object.assign(toUpdateUser,newUserInfo)
            console.log(toUpdateUser);
            this.removeUser(id);
            this.saveNewUser(toUpdateUser)
        }

        saveNewUser(user) {
            this.employees.push(user);
        }

        getAllUsersList() {
            return this.employees;
        }

        getUserList(searchTerm) {
                return this.employees.filter(function (user) {
                    return user.firstName.toLowerCase().includes(searchTerm.toLowerCase())
                })
        }

        getUserDetails(userId) {
            console.log(userId)
            return this.findUser(userId)
        }
        //TODO need to fix this check
        checkLogin(username, password) {
            for (var i = 0; i < this.employees.length; i++) {
                if (this.employees[i].username == username && this.employees[i].password == password) {
                    this.AuthService.setUserAuthenticated(this.employees[i])
                    return this.employees[i].id;
            }
        }
    };
    }

    export default UserService;