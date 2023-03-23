import Block from "../../utils/Block";
import template from "./ui.hbs";
import { PopupAddUserToChatProps } from "./types";
import { Button } from "../button";
import { ButtonClose } from "../buttonClose";
import { InputField } from "../inputField";
import { formIsValid, getFormData } from "../../helpers/getFormData";
import UserController from "../../controllers/UserController";
import { withStore } from "../../hocs/withStore";
import { ChatUserItem } from "../chatUserItem";
import { User } from "../../api/types";
import chatsController from "../../controllers/ChatsController";

export class PopupAddUserToChatBase extends Block<PopupAddUserToChatProps> {
  constructor(props: PopupAddUserToChatProps) {
    super(props);
    if (props.userSearchResultList?.length) {
      this.show();
    }
  }

  init() {
    this.children.button = new Button({
      text: "поиск",
      type: "submit",
      class: "button popup__upload-button",
      events: {
        click: (e: Event) => this.onSubmit(e),
      },
    });
    this.children.input = new InputField({
      type: "text",
      name: "user_name",
      label: "",
      required: true,
      errorMessage: "Введите логин пользователя",
    });
    this.children.closeButton = new ButtonClose({
      events: {
        click: () => this.hide(),
      },
    });
    this.children.userList = this.createUserList(this.props);
  }

  async onSubmit(e: Event) {
    e.preventDefault();
    const form = this.getContent()
      ?.querySelector(".add-user-to-chat__form") as HTMLElement | null;
    const data = getFormData(form);
    const isValid = formIsValid(form);
    if (isValid) {
      await UserController.searchUser(data["user_name"]);
    }
  }

  createUserList(props: PopupAddUserToChatProps) {
    return (props.userSearchResultList || []).map((user => {
      return new ChatUserItem({
        name: `${user.login} (${user.first_name} ${user.second_name})`,
        buttonName: "добавить",
        onClick: () => this.addUserToChat(user),
      });
    }));
  }

  addUserToChat(user: User) {
    chatsController.addUserToChat(this.props.selectedChatId, user.id);
  }

  componentDidUpdate(_oldProps: PopupAddUserToChatProps, newProps: PopupAddUserToChatProps): boolean {
    this.children.userList = this.createUserList(newProps);
    return true;
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}

export const PopupAddUserToChat = withStore((state) => {
  return {
    userSearchResultList: state.userSearchResultList,
    selectedChatId: state.selectedChatId,
  };
})(PopupAddUserToChatBase);
