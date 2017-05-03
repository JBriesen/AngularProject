
(function () {
    'use strict';

    angular
        .module ('app')
        .component ('userLogin', component());


    function component() {

        function componentController(userService, $state, $rootScope){
            var vm = this;
            vm.loginCheck = loginCheck;
            vm.message = 0;
            init();

            function init(){

            }

            function loginCheck(){
                var username = vm.user.name
                var password = vm.user.password;
                var response = userService.checkLogin(username,password);
                vm.response = response;

                console.log(response);
                if(response >= 0){
                    $state.go('home');
                    $rootScope.$broadcast("loggedInStatus",
                    {isLoggedIn:true, 
                        username:username
                    });
                }
                else if(response == -1){
                    vm.message = "Invalid password";
                }
                else if(response == -2){
                    vm.message = "username not found";
                }
            }
        }

        return {
            bindings: {},
            templateUrl:"app/user-list/user-login/user-login.component.html",
            controller: componentController
        }
    }

} ());