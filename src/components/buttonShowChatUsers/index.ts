import { Block } from "../../utils/Block";
import  template  from "./ui.hbs";
import { ButtonShowChatUsersProps } from "./types";

export class ButtonShowChatUsers extends Block {
  constructor(props: ButtonShowChatUsersProps) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
