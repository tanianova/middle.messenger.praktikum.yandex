import { Block } from "../../utils/Block";
import  template  from "./ui.hbs";
import { ChatMessage } from "../../components/chatMessage";
import { ButtonArrow } from "../../components/buttonArrow";

import { InputMessage } from "../../components/inputMessage";
import { getFormData } from "../../helpers/getFormData";

import { ChatsController } from "../../controllers/ChatsController";
import { ChatHeader } from "../../components/chatHeader";
import { withStore } from "../../hocs/withStore";
import { ChatSidebar } from "../../components/chatSidebar";
import { MessagesController } from "../../controllers/MessagesController";
import { ChatPageProps } from "./types";

export class ChatPageBase extends Block<ChatPageProps> {
  init() {
    this.children.sidebar = new ChatSidebar({});
    this.children.chatHeader = this.createChatHeader(this.props);
    this.children.chatMessageList = this.createChatMessageList(this.props);
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
    MessagesController.sendMessage(this.props.selectedChatId, data["message"]);
    (this.children.inputMessage as InputMessage).setValue("");
  }

  createChatHeader(props: ChatPageProps) {
    return new ChatHeader(props);
  }

  createChatMessageList(props: ChatPageProps) {
    return (props.messages || []).map(data => {
      return new ChatMessage({ data });
    });
  }

  messageDate(): string {
    const lastMessage = (this.props.selectedChat || {}).last_message;
    return lastMessage
      ? new Date(lastMessage.time).toLocaleDateString("ru-Ru")
      : "Выберите Чат";
  }

  componentDidUpdate(_oldProps: ChatPageProps, newProps: ChatPageProps): boolean {
    this.children.chatHeader = this.createChatHeader(newProps);
    this.children.chatMessageList = this.createChatMessageList(newProps);
    return true;
  }

  render() {
    return this.compile(template, {
      ...this.props,
      messageDate: this.messageDate(),
    });
  }
}

export const ChatPage = withStore((state) => {
  return {
    chatList: state.chatList,
    selectedChatId: state.selectedChatId,
    selectedChatUserList: state.selectedChatUserList,
    searchList: state.userSearchResultList,
    selectedChat: state.selectedChatId &&
      state.chatList?.find((chat) => chat.id === state.selectedChatId),
    messages: state.selectedChatId && (state.messages || {})[state.selectedChatId] || [],
  };
})(ChatPageBase);
