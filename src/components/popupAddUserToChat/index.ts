import Block from "../../utils/Block";
import template from "./ui.hbs";
import { PopupAddUserToChatProps } from "./types";
import { Button } from "../button";
import { ButtonClose } from "../buttonClose";
import { InputField } from "../inputField";
import { formIsValid, getFormData } from "../../helpers/getFormData";
import UserController from "../../controllers/UserController";

export class PopupAddUserToChat extends Block {
  constructor(props: PopupAddUserToChatProps) {
    super(props);
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

  render() {
    return this.compile(template, {});
  }
}
