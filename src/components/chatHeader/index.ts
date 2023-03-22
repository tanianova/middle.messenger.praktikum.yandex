import Block from "../../utils/Block";
import template from "./ui.hbs";
import { ChatHeaderProps } from "./types";
import { PopoverEditChat } from "../popoverEditChat";
import { ButtonEditChat } from "../buttonEditChat";

export class ChatHeader extends Block<ChatHeaderProps> {
  constructor(props: ChatHeaderProps) {
    super(props);
  }

  init() {
    this.children.popoverEditChat = new PopoverEditChat({});
    this.children.buttonEditChat = new ButtonEditChat({
      events: {
        click: () => {
          (this.children.popoverEditChat as PopoverEditChat).toggle()
        },
      },
    });
  }

  render() {
    return this.compile(template, {
      ...this.props,
      title: this.props.selectedChat?.title,
    });
  }
}
