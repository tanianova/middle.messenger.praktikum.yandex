import { AuthAPI } from "../api/AuthAPI";
import { SigninData, SignupData } from "../api/types";
import store from "../utils/Store";
import router from "../utils/Router";
import { Routes } from "../index";

class AuthController {
  private api: AuthAPI;

  constructor() {
    this.api = new AuthAPI();

  }

  async signup(data: SignupData) {
    try {
      await this.api.signup(data);
      await this.getUser();
      router.go(Routes.Profile);
    } catch (e) {
      console.error(e.message);
    }
  }

  async signin(data: SigninData) {
    try {
      await this.api.signin(data);
      await this.getUser();
      router.go(Routes.Profile);
    } catch (e) {
      console.error(e.message);
    }
  }

  async logout() {
    try {
      await this.api.logout();
      store.set("user", undefined);
      router.go(Routes.Auth);
    } catch (e) {
      console.error(e.message);
    }
  }

  getUser() {
    const user = this.api.read();
    store.set("user", user);
  }
}

export default new AuthController();
