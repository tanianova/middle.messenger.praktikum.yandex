import Block from "../../utils/Block";
import template from "./ui.hbs";
import { ChatItemProps } from "./types";

export class ChatItem extends Block {
  constructor(props: ChatItemProps) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
