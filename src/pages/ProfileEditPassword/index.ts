import Block from "../../utils/Block";
import template from "./ui.hbs";
import { ButtonArrow } from "../../components/buttonArrow";
import { Avatar } from "../../components/avatar";
import { Button } from "../../components/button";
import { editPasswordInputs } from "./const";
import { InputField } from "../../components/inputField";
import { getFormData } from "../../utils/getFormData";

export class ProfileEditPasswordPage extends Block {
  init() {
    this.children.buttonArrow = new ButtonArrow({
      type: "button",
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

  onSubmit(e: Event) {
    e.preventDefault();
    const data = getFormData(this.getContent());
    console.log(data);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
