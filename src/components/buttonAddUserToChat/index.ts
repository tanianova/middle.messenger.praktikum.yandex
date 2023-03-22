import Block from "../../utils/Block";
import template from "./ui.hbs";
import { ButtonAddUserToChatProps } from "./types";

export class ButtonAddUserToChat extends Block {
  constructor(props: ButtonAddUserToChatProps) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
