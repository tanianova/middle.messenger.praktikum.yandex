import Block from "../../utils/Block";
import template from "./ui.hbs";
import { ButtonDeleteChat } from "../buttonDeleteChat";
import { PopoverEditChatProps } from "./types";
import { ButtonAddUserToChat } from "../buttonAddUserToChat";
import { ButtonShowChatUsers } from "../buttonShowChatUsers";

export class PopoverEditChat extends Block<PopoverEditChatProps> {
  constructor(props: PopoverEditChatProps) {
    super(props);
  }

  init() {
    this.children.buttonDeleteChat = new ButtonDeleteChat({
      events: { click: () => this.hide() },
    });
    this.children.buttonAddUserToChat = new ButtonAddUserToChat({
      events: { click: () => this.hide() },
    });
    this.children.buttonShowChatUsers = new ButtonShowChatUsers({
      events: { click: () => this.hide() },
    })
  }

  render() {
    return this.compile(template, {});
  }
}
