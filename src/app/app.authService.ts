    class AuthService {
        userIsAuthenticated:boolean = false;
        user: any;
        constructor() {

        }

        setUserAuthenticated(user){
            this.userIsAuthenticated = true;
            this.user = user;
        }
        getUserAuthenticated(){
            return this.user
        }
        getAuthStatus(){
            return this.userIsAuthenticated;
        }

        removeUserAuthenticated(){
            this.userIsAuthenticated = false;
            this.user = {};
        }
    }
    export default AuthService;