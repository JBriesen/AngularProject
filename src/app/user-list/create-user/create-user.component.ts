function componentController(userService,$location) 
{
    var vm = this;
    vm.saveNewUser = saveNewUser;

    init();

    function init() {

    }

    function saveNewUser() {
        var user = vm.user;
        console.log('creating new user')
        userService.saveNewUser(user);
        $location.path('/home/')
    }
}

export const CreateUserComponent = {
    templateUrl: "./create-user.html",
    controller: componentController,
    controllerAs: ''
}