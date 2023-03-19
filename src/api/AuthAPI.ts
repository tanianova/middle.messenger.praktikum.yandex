import BaseAPI from "./BaseAPI";
import { SigninData, SignupData, User } from "./types";

export class AuthAPI extends BaseAPI {
  constructor() {
    super("/auth");
  }

  signup(data: SignupData) {
    return this.http.post("/signup", data);
  }

  signin(data: SigninData) {
    return this.http.post("/signin", data);
  }

  logout() {
    return this.http.post("/logout");
  }

  read(): Promise<User> {
    return this.http.get('/user');
  }

  create = undefined;

  update = undefined;
  delete = undefined;
}

