import { Block } from "../../utils/Block";
import  template  from "./ui.hbs";
import { ButtonDeleteChatProps } from "./types";

export class ButtonDeleteChat extends Block {
  constructor(props: ButtonDeleteChatProps) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
