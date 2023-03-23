import Block from "../../utils/Block";
import template from "./ui.hbs";
import { ChatUserItemProps } from "./types";
import { Button } from "../button";

export class ChatUserItem extends Block<ChatUserItemProps> {
  constructor(props: ChatUserItemProps) {
    super(props);
  }

  init() {
    this.children.button = new Button({
      text: this.props.buttonName,
      type: "submit",
      class: "link",
      events: {
        click: (e) => {
          e.preventDefault();
          this.props.onClick();
        },
      },
    });
  }

  render() {
    return this.compile(template, {
      ...this.props,
    });
  }
}
