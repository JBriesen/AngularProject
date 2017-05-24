    class AuthService {
        userIsAuthenticated:boolean = false;
        user: any;
        constructor() {

        }

        setUserAuthenticated(user){
            this.userIsAuthenticated = true;
            this.user = user;
            console.log('authenticatingUser');
        }
        getUserAuthenticated(){
            return this.user
        }
        getAuthStatus(){
            console.log('getAuthStatus');
            return this.userIsAuthenticated;
        }

        removeUserAuthenticated(){
            this.userIsAuthenticated = false;
            this.user = {};
        }
    }
    export default AuthService;