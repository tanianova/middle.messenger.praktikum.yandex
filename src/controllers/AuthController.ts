import { AuthAPI, API } from "../api/AuthAPI";
import { SigninData, SignupData } from "../api/types";
import { store } from "../utils/Store";
import { router } from "../utils/Router";
import { Routes } from "../index";
import { MessagesController } from "./MessagesController";

class AuthControllerBase {
  private api: AuthAPI;

  constructor() {
    this.api = API;
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
      MessagesController.closeAll();
      await this.api.logout();
      store.set("user", undefined);
      router.go(Routes.Auth);
    } catch (e) {
      console.error(e.message);
    }
  }

  async getUser() {
    const user = await this.api.read();
    store.set("user", user);
  }
}

export const AuthController = new AuthControllerBase();
