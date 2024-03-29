import { UserAPI, API } from "../api/UserAPI";
import { UpdatePasswordData, UpdateUserData } from "../api/types";
import { store } from "../utils/Store";
import { router } from "../utils/Router";
import { Routes } from "../index";

class UserControllerBase {
  private readonly api: UserAPI;

  constructor() {
    this.api = API;
  }

  async updateUser(data: UpdateUserData) {
    try {
      const user = await this.api.update(data);
      store.set("user", user);
      router.go(Routes.Profile);
    } catch (e) {
      console.error(e.message);
    }
  }

  async updateAvatar(formData: FormData) {
    try {
      const user = await this.api.updateAvatar(formData);
      store.set("user", user);
    } catch (e) {
      console.error(e.message);
    }
  }

  async updatePassword(data: UpdatePasswordData) {
    try {
      await this.api.updatePassword(data);
      router.go(Routes.Profile);
    } catch (e) {
      console.error(e.message);
    }
  }

  async searchUser(login: string) {
    store.set("userSearchResultList", undefined);
    try {
      const userSearchResultList = await this.api.searchUser({ login });
      store.set("userSearchResultList", userSearchResultList);
    } catch (e) {
      console.error(e.message);
    }
  }
}

export const UserController = new UserControllerBase();
