import Block from "../../utils/Block";
import template from "./ui.hbs";
import { ChatMessageProps } from "./types";

export class ChatMessage extends Block {
  constructor(props: ChatMessageProps) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
