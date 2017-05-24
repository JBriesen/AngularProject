function componentController(userService,authService,$stateParams,$state) 
{
        var userId = $stateParams.id;
        var vm = this;
        vm.editUser = editUser;
        vm.currentUser = authService.getUserAuthenticated();
        vm.removeUser = removeUser;

        init();

        function init() {
            console.log(userId)
            vm.userDetails = userService.getUserDetails(userId);
            console.log(vm.userDetails);
        }

        function editUser() {
            console.log('edit user');
            console.log(userId);
            //$location.path('/userList/edit/' + userId);
            $state.go('userEdit',{id: userId})
        }

        function removeUser() {
            console.log('remove user');
            userService.removeUser(userId);
            $state.go('userList')
        }
    }

        export const UserDetailComponent = {
            templateUrl: "./user-detail.html",
            controller: componentController,
            controllerAs: ''
        }