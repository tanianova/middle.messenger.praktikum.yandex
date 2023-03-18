import Block from "../../utils/Block";
import template from "./ui.hbs";
import { profileInputs } from "./const";

import { Avatar } from "../../components/avatar";
import { Link } from "../../components/link";
import { InputField } from "../../components/inputField";
import { Routes } from "../../index";
import { LinkToChat } from "../../components/linkToChat";

export class ProfilePage extends Block {
  init() {
    this.children.linkToChat = new LinkToChat({
      to: Routes.Chat
    })
    this.children.avatar = new Avatar({});
    this.children.profileInputs = profileInputs.map(input => new InputField({ ...input }));
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
    this.children.exitLink = new Link({
      text: "Выйти",
      to: Routes.Auth,
      class: "profile__link link-danger",
    });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
