import Block from "../../utils/Block";
import template from "./ui.hbs";
import { Avatar } from "../../components/avatar";
import { Button } from "../../components/button";
import { editPasswordInputs } from "./const";
import { InputField } from "../../components/inputField";
import { formIsValid, getFormData } from "../../helpers/getFormData";
import { LinkToChat } from "../../components/linkToChat";
import { Routes } from "../../index";
import { withStore } from "../../hocs/withStore";
import UserController from "../../controllers/UserController";

export class ProfileEditPasswordPageBase extends Block {
  init() {
    this.children.linkToChat = new LinkToChat({
      to: Routes.Chat,
    });
    this.children.avatar = new Avatar({ class: "avatar-edit" });
    this.children.editPasswordInputs = editPasswordInputs.map(input => new InputField({ ...input }));
    this.children.button = new Button({
      text: "Сохранить",
      type: "submit",
      class: "button profile__button",
      events: {
        click: (e: Event) => this.onSubmit(e),
      },
    });
  }

  async onSubmit(e: Event) {
    e.preventDefault();
    const data = getFormData(this.getContent()
      ?.querySelector(".profile__form"));
    const isValid = formIsValid(this.getContent());
    if (isValid) {
      await UserController.updatePassword(data);
    }
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}

export const ProfileEditPasswordPage = withStore((state) => {
  return state.user || {};
})(ProfileEditPasswordPageBase);
