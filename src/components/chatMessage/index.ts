import Block from "../../utils/Block";
import template from "./ui.hbs";
import { ChatMessageProps } from "./types";
import { withStore } from "../../hocs/withStore";

export class ChatMessageBase extends Block<ChatMessageProps> {
  constructor(props: ChatMessageProps) {
    super(props);
  }

  render() {
    const time = this.props.data.time && new Date(this.props.data.time).toLocaleTimeString()
    return this.compile(template, {
      ...this.props.data,
      isMine: this.props.data.user_id = this.props.user.id,
      time
    });
  }
}

export const ChatMessage = withStore((state) => {
  return {
    user: state.user,
  };
})(ChatMessageBase);
