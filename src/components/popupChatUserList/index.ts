import { Block } from "../../utils/Block";
import template from "./ui.hbs";
import { PopupChatUserListProps } from "./types";
import { ButtonClose } from "../buttonClose";
import { withStore } from "../../hocs/withStore";
import { ChatUserItem } from "../chatUserItem";
import { ChatsController } from "../../controllers/ChatsController";
import { User } from "../../api/types";
import { ErrorMessage } from "../errorMessage";

export class PopupChatUserListBase extends Block<PopupChatUserListProps> {
  constructor(props: PopupChatUserListProps) {
    super(props);
  }

  init() {
    this.children.errorMessage = new ErrorMessage({
      text: "Вы не можете удалить последнего участника чата",
    });
    this.children.closeButton = new ButtonClose({
      events: {
        click: () => this.hide(),
      },
    });
    this.children.userList = this.createUserList(this.props);
  }

  createUserList(props: PopupChatUserListProps) {
    (this.children.errorMessage as Block).hide();
    return (props.selectedChatUserList || []).map((user => {
      return new ChatUserItem({
        name: `${user.login} (${user.first_name} ${user.second_name})`,
        buttonName: "удалить",
        onClick: () => this.deleteUserFromChat(user),
      });
    }));
  }

  deleteUserFromChat(user: User) {
    if (this.props.selectedChatUserList && this.props.selectedChatUserList?.length <= 1) {
      (this.children.errorMessage as Block).show();
    } else {
      ChatsController.deleteUserFromChat(this.props.selectedChatId, user.id);
      (this.children.errorMessage as Block).hide();
    }

  }

  componentDidUpdate(_oldProps: PopupChatUserListProps, newProps: PopupChatUserListProps): boolean {
    this.children.userList = this.createUserList(newProps);
    return true;
  }

  render() {
    return this.compile(template, {
      ...this.props,
    });
  }
}

export const PopupChatUserList = withStore((state) => {
  return {
    selectedChatUserList: state.selectedChatUserList,
    selectedChatId: state.selectedChatId,
  };
})(PopupChatUserListBase);
