import { ChatInfo, Message, User } from "../api/types";
import { set } from "../helpers/set";
import { EventBus } from "./EventBus";

export interface State {
  user?: User;
  userSearchResultList?: User[];
  chatList?: ChatInfo[];
  selectedChatUserList?: User[];
  selectedChatId?: number;
  messages?: Record<number, Message[]>;
}

export enum StoreEvent {
  Updated = "updated"
}

export class Store extends EventBus {
  private state: State = {};

  set(path: string, value: unknown) {
    set(this.state, path, value);

    this.emit(StoreEvent.Updated, this.state);
  }

  getState(): State {
    return this.state;
  }
}

const store = new Store();

export default store;
