import Block from "../../utils/Block";
import template from "./ui.hbs";

import { withStore } from "../../hocs/withStore";
import { Button } from "../button";
import { PopupCreateChat } from "../popupCreateChat";
import { Link } from "../link";
import { Routes } from "../../index";
import { SearchInput } from "../searchInput";
import { ChatItem } from "../chatItem";
import ChatsController from "../../controllers/ChatsController";
import { ChatSidebarProps } from "./types";
import router from "../../utils/Router";

export class ChatSidebarBase extends Block<ChatSidebarProps> {
  init() {
    this.children.createChatButton = new Button({
      text: "Создать чат",
      type: "submit",
      class: "button chat-sidebar__button",
      events: {
        click: () => (this.children.popupCreateChat as PopupCreateChat).show(),
      },
    });
    this.children.popupCreateChat = new PopupCreateChat({});
    this.children.profileLink = new Link({
      text: "Профиль",
      class: "chat-link",
      to: Routes.Profile,
    });
    this.children.searchInput = new SearchInput();
    this.children.chatList = this.createChats(this.props);
  }

  createChats(props: ChatSidebarProps) {
    return (props.chatList || []).map(data => {
      return new ChatItem({
        data,
        selectedChatId: props.selectedChatId,
        events: {
          click: () => {
            ChatsController.selectChat(data.id);
            router.go(Routes.Chat);
          },
        },
      });
    });
  }

  protected componentDidUpdate(_oldProps: ChatSidebarProps, newProps: ChatSidebarProps): boolean {
    this.children.chatList = this.createChats(newProps);
    return true;
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}

export const ChatSidebar = withStore((state) => {
  return {
    chatList: state.chatList,
    selectedChatId: state.selectedChatId,
  };
})(ChatSidebarBase);
