export interface IUser {
  id: number;
  login: string;
  password: string;
  name: string;
  surname: string;
}

class User implements IUser {
  public id: number;
  public login: string;
  public password: string;
  public name: string;
  public surname: string;

  constructor(
    loginOrUser: string | IUser,
    id: number = -1,
    password: string = '',
    name: string = '',
    surname: string = ''
  ) {
    if (typeof loginOrUser === 'string') {
      this.id = id || -1;
      this.login = loginOrUser;
      this.password = password;
      this.name = name;
      this.surname = surname;
    } else {
      this.id = loginOrUser.id;
      this.login = loginOrUser.login;
      this.password = loginOrUser.password;
      this.name = loginOrUser.name;
      this.surname = loginOrUser.surname;
    }
  }
}

export default User;
