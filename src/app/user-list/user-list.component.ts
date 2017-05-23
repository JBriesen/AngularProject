function componentController(userService, $state) {
            var vm = this;
            vm.getUserList = getUserList;
            vm.createUser = createUser;
            vm.userListArr = [];
            vm.change = change;

            function getUserList() {
                vm.userListArr = userService.getAllUsersList()
            }

            function createUser() {
                console.log('creating user')
                $state.go('createUser');
            }

            function change(searchTerm) {
                if (searchTerm.length > 2) {
                    vm.userListArr = userService.getUserList(searchTerm)
                    console.log(vm.userListArr);
                }
                else {
                    vm.userListArr = [];
                }
            }
        }

        export const UserListComponent = {
            templateUrl: "./user-list.html",
            controller: componentController,
        }