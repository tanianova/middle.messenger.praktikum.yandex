import { BaseAPI } from "./BaseAPI";
import { ChatInfo, User } from "./types";

export class ChatsAPI extends BaseAPI {
  constructor() {
    super("/chats");
  }

  create(title: string) {
    return this.http.post("/", { title });
  }

  delete(id: number): Promise<unknown> {
    return this.http.delete("/", { chatId: id });
  }

  read(): Promise<ChatInfo[]> {
    return this.http.get("/");
  }

  getUsers(id: number): Promise<User[]> {
    return this.http.get(`/${id}/users`);
  }

  addUsers(id: number, users: number[]): Promise<unknown> {
    return this.http.put("/users", {
      users,
      chatId: id,
    });
  }

  deleteUsers(id: number, users: number[]) {
    return this.http.delete("/users", {
      users,
      chatId: id,
    });
  }

  async getToken(id: number): Promise<string> {
    const response = await this.http.post<{ token: string }>(`/token/${id}`);

    return response.token;
  }

  update = undefined;
}

export const API = new ChatsAPI();
