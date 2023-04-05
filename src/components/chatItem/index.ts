import { Block } from "../../utils/Block";
import template from "./ui.hbs";
import { ChatItemProps } from "./types";
import { store } from "../../utils/Store";
import { BASE_URL } from "../../helpers/const";

export class ChatItem extends Block<ChatItemProps> {
  constructor(props: ChatItemProps) {
    super(props);
  }

  render() {
    const time = this.props.data.last_message?.time && new Date(this.props.data.last_message?.time).toLocaleTimeString();
    const avatar = this.props.data.avatar && `${BASE_URL}/resources${this.props.data.avatar}`;
    return this.compile(template, {
      ...this.props.data,
      last_message: this.props.data.last_message?.content,
      time,
      lastMessageMine: this.props.data.last_message?.user?.email === store.getState().user?.email,
      selected: this.props.data.id === this.props.selectedChatId,
      avatar,
    });
  }
}
