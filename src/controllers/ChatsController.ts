import { ChatsAPI, API } from "../api/ChatsAPI";
import { store } from "../utils/Store";
import { router } from "../utils/Router";
import { Routes } from "../index";
import { MessagesController } from "./MessagesController";

class ChatsControllerBase {
  private readonly api: ChatsAPI;

  constructor() {
    this.api = API;
  }

  async create(title: string) {
    try {
      await this.api.create(title);
      await this.getChats();
    } catch (e) {
      console.error(e.message);
    }
  }

  async getChats() {
    try {
      const chatList = await this.api.read();
      chatList.map(async (chat) => {
        const token = await this.getToken(chat.id);
        if (token) {
          await MessagesController.connect(chat.id, token);
        }
      });
      store.set("chatList", chatList);
    } catch (e) {
      console.error(e.message);
    }
  }

  async addUserToChat(id: number, userId: number) {
    try {
      await this.api.addUsers(id, [userId]);
      const userList = await this.api.getUsers(id);
      store.set("selectedChatUserList", userList);
    } catch (e) {
      console.error(e.message);
    }
  }

  async deleteUserFromChat(id: number, userId: number) {
    try {
      await this.api.deleteUsers(id, [userId]);
      const userList = await this.api.getUsers(id);
      store.set("selectedChatUserList", userList);
    } catch (e) {
      console.error(e.message);
    }
  }

  async deleteChat(id: number) {
    try {
      await this.api.delete(id);
      await this.getChats();
      store.set("selectedChatId", undefined);
      router.go(Routes.Chat);
    } catch (e) {
      console.error(e.message);
    }
  }

  async selectChat(id: number) {
    try {
      const userList = await this.api.getUsers(id);
      store.set("selectedChatUserList", userList);
      store.set("selectedChatId", id);
    } catch (e) {
      console.error(e.message);
    }
  }

  getToken(id: number) {
    try {
      return this.api.getToken(id);
    } catch (e) {
      console.error(e.message);
    }
  }
}

export const ChatsController = new ChatsControllerBase();
