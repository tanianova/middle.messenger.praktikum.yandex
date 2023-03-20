import Block from "../../utils/Block";
import template from "./ui.hbs";
import { profileInputs } from "./const";

import { Avatar } from "../../components/avatar";
import { Link } from "../../components/link";
import { InputField } from "../../components/inputField";
import { Routes } from "../../index";
import { LinkToChat } from "../../components/linkToChat";
import AuthController from "../../controllers/AuthController";
import { withStore } from "../../hocs/withStore";
import { Button } from "../../components/button";

class ProfilePageBase extends Block {
  init() {
    this.children.linkToChat = new LinkToChat({
      to: Routes.Chat,
    });
    this.children.avatar = new Avatar({});
    this.children.profileInputs = profileInputs.map(input => new InputField({
      ...input,
      value: this.props[input.name],
      readonly: true,
    }));
    this.children.editInfoLink = new Link({
      text: "Изменить данные",
      to: Routes.EditInfo,
      class: "profile__link",
    });
    this.children.editPasswordLink = new Link({
      text: "Изменить пароль",
      to: Routes.EditPassword,
      class: "profile__link",
    });
    this.children.exitLink = new Button({
      text: "Выйти",
      type: "submit",
      class: "profile__link link-danger",
      events: {
        click: () => {
          AuthController.logout();
        },
      },
    });
  }

  render() {
    return this.compile(template, {
      ...this.props,
      title: this.props.first_name || this.props.login,
    });
  }
}

export const ProfilePage = withStore((state) => {
  return state.user || {};
})(ProfilePageBase);
