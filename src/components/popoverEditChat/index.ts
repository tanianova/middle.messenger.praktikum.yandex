import Block from "../../utils/Block";
import template from "./ui.hbs";
import { ButtonDeleteChat } from "../buttonDeleteChat";
import { PopoverEditChatProps } from "./types";
import { ButtonAddUserToChat } from "../buttonAddUserToChat";
import { ButtonShowChatUsers } from "../buttonShowChatUsers";
import { withStore } from "../../hocs/withStore";
import ChatsController from "../../controllers/ChatsController";

export class PopoverEditChatBase extends Block<PopoverEditChatProps> {
  constructor(props: PopoverEditChatProps) {
    super(props);
  }

  init() {
    this.children.buttonDeleteChat = new ButtonDeleteChat({
      events: {
        click: () => {
          ChatsController.deleteChat(this.props.selectedChat.id);
          this.hide();
        },
      },
    });
    this.children.buttonAddUserToChat = new ButtonAddUserToChat({
      events: {
        click: () => this.props.showPopupAddUserToChat(),
      },
    });
    this.children.buttonShowChatUsers = new ButtonShowChatUsers({
      events: {
        click: () => this.props.showPopupChatUserList(),
      },
    });
  }

  render() {
    return this.compile(template, {});
  }
}

export const PopoverEditChat = withStore((state) => {
  return {
    selectedChatUserList: state.selectedChatUserList,
    selectedChat: state.selectedChatId &&
      state.chatList?.find((chat) => chat.id === state.selectedChatId),
  };
})(PopoverEditChatBase);
