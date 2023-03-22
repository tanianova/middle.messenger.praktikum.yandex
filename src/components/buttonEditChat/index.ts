import Block from "../../utils/Block";
import template from "./ui.hbs";
import { ButtonEditChatProps } from "./types";

export class ButtonEditChat extends Block {
  constructor(props: ButtonEditChatProps) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
