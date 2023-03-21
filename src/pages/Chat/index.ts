import Block from "../../utils/Block";
import template from "./ui.hbs";
import { PopoverEditUser } from "../../components/popoverEditUser";
import { chatMessageList } from "./const";
import { ChatMessage } from "../../components/chatMessage";
import { ButtonArrow } from "../../components/buttonArrow";

import { InputMessage } from "../../components/inputMessage";
import { getFormData } from "../../helpers/getFormData";

import ChatsController from "../../controllers/ChatsController";
import { ChatSidebar } from "../../components/chatSidebar";

export class ChatPage extends Block {
  init() {
    this.children.sidebar = new ChatSidebar({ });
    this.children.popoverEditUser = new PopoverEditUser();
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

  render() {
    return this.compile(template, { ...this.props });
  }
}
