import BaseAPI from "./BaseAPI";
import { SearchUserData, UpdatePasswordData, UpdateUserData, User } from "./types";

export class UserAPI extends BaseAPI {
  constructor() {
    super("/user");
  }

  update(data: UpdateUserData): Promise<User> {
    return this.http.put("/profile", data);
  }

  updateAvatar(formData: FormData) {
    return this.http.put("/profile/avatar", formData);
  }

  updatePassword(data: UpdatePasswordData) {
    return this.http.put("/password", data);
  }

  searchUser(data: SearchUserData): Promise<User[]> {
    return this.http.post("/search", data);
  }

  create = undefined;
  read = undefined;
  delete = undefined;
}

export default new UserAPI();
