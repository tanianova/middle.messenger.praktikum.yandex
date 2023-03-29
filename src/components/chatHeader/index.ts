import { Block } from "../../utils/Block";
import  template  from "./ui.hbs";
import { ChatHeaderProps } from "./types";
import { PopoverEditChat } from "../popoverEditChat";
import { ButtonEditChat } from "../buttonEditChat";
import { PopupAddUserToChat } from "../popupAddUserToChat";
import { PopupChatUserList } from "../popupChatUserList";

export class ChatHeader extends Block<ChatHeaderProps> {
  constructor(props: ChatHeaderProps) {
    super(props);
  }

  init() {
    this.children.popupAddUserToChat = new PopupAddUserToChat({});
    this.children.popupChatUserList = new PopupChatUserList({});
    this.children.popoverEditChat = new PopoverEditChat({
      showPopupAddUserToChat: () => {
        (this.children.popupAddUserToChat as Block).show();
        (this.children.popoverEditChat as Block).hide();
      },
      showPopupChatUserList:() => {
        (this.children.popupChatUserList as Block).show();
        (this.children.popoverEditChat as Block).hide();
      },
    });
    this.children.buttonEditChat = new ButtonEditChat({
      events: {
        click: () => {
          (this.children.popoverEditChat as Block).show();
        },
      },
    });
  }

  render() {
    return this.compile(template, {
      ...this.props,
      title: this.props.selectedChat?.title,
    });
  }
}
