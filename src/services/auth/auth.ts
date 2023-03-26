import { AuthInterface } from "./types";


export default class AuthService implements AuthInterface {
  isError = false;
  isLogin = false;
  
  doLogin(username: string, password: string){
    // TODO: doing login
    return this;
  }

  doRegis(data: object) {
    // TODO: doing register
    return this;
  }
}