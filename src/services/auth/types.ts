export interface AuthInterface {
  isLogin: boolean,
  isError: boolean,
  msgError?: string,
  doLogin: (username: string, password : string) => void,
  doRegis: (data: object) => void,
}