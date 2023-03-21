import Block from "../../utils/Block";
import template from "./ui.hbs";
import { ChatItemProps } from "./types";
import store from "../../utils/Store";

export class ChatItem extends Block<ChatItemProps> {
  constructor(props: ChatItemProps) {
    super(props);
  }

  render() {
    return this.compile(template, {
      ...this.props.data,
      time: this.props.data.last_message.time,
      lastMessageMine: this.props.data.last_message.user.id === store.getState().user?.id,

    });
  }
}
