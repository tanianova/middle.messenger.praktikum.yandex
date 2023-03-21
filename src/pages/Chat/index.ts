import Block from "../../utils/Block";
import template from "./ui.hbs";
import { chatMessageList } from "./const";
import { ChatMessage } from "../../components/chatMessage";
import { ButtonArrow } from "../../components/buttonArrow";

import { InputMessage } from "../../components/inputMessage";
import { getFormData } from "../../helpers/getFormData";

import ChatsController from "../../controllers/ChatsController";
import { ChatHeader } from "../../components/chatHeader";
import { ChatHeaderProps } from "../../components/chatHeader/types";
import { withStore } from "../../hocs/withStore";
import { ChatSidebar } from "../../components/chatSidebar";

export class ChatPageBase extends Block {
  init() {
    this.children.sidebar = new ChatSidebar({});
    this.children.chatHeader = this.createChatHeader(this.props);
    this.children.chatMessageList = chatMessageList.map(message => new ChatMessage({ ...message }));
    this.children.buttonArrow = new ButtonArrow({
      type: "submit",
      class: "arrow-reverse",
      events: {
        click: (e: Event) => this.onSubmit(e),
      },
    });
    this.children.inputMessage = new InputMessage({});
    ChatsController.getChats();
  }

  onSubmit(e: Event) {
    e.preventDefault();
    const data = getFormData(this.getContent());
    console.log(data);
  }

  createChatHeader(props: ChatHeaderProps) {
    return new ChatHeader(props);
  }

  protected componentDidUpdate(_oldProps: ChatHeaderProps, newProps: ChatHeaderProps): boolean {
    this.children.chatHeader = this.createChatHeader(newProps);
    return true;
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}

export const ChatPage = withStore((state) => {
  return {
    chatList: state.chatList,
    selectedChatId: state.selectedChatId,
    selectedChatUserList: state.selectedChatUserList,
    selectedChat: state.selectedChatId &&
      state.chatList?.find((chat) => chat.id === state.selectedChatId),
  };
})(ChatPageBase);
