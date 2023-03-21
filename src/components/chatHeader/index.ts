import Block from "../../utils/Block";
import template from "./ui.hbs";
import { ChatHeaderProps } from "./types";
import { PopoverEditUser } from "../popoverEditUser";

export class ChatHeader extends Block<ChatHeaderProps> {
  constructor(props: ChatHeaderProps) {
    super(props);
  }

  init() {
    this.children.popoverEditUser = new PopoverEditUser();
  }

  render() {
    return this.compile(template, {
      ...this.props,
      title: this.props.selectedChat?.title,
    });
  }
}
