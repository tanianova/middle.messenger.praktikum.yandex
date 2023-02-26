import Block from "../../utils/Block";
import template from "./ui.hbs";
import { PopoverEditUser } from "../../components/popoverEditUser";
import { SearchInput } from "../../components/searchInput";
import { chatList, chatMessageList } from "./const";
import { ChatItem } from "../../components/chatItem";
import { ChatMessage } from "../../components/chatMessage";
import { ButtonArrow } from "../../components/buttonArrow";
import { Link } from "../../components/link";
import { InputMessage } from "../../components/inputMessage";
import { getFormData } from "../../utils/getFormData";

export class ChatPage extends Block {
  init() {
    this.children.popover = new PopoverEditUser();
    this.children.profileLink = new Link({
      text: "Профиль",
      class: "chat-link",
      href: "/profile",
    });
    this.children.searchInput = new SearchInput();
    this.children.chatList = chatList.map(chat => new ChatItem({ ...chat }));
    this.children.chatMessageList = chatMessageList.map(message => new ChatMessage({ ...message }));
    this.children.buttonArrow = new ButtonArrow({
      type: "submit",
      class: "arrow-reverse",
      events: {
        click: (e: Event) => this.onSubmit(e),
      },
    });
    this.children.inputMessage = new InputMessage({});
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
