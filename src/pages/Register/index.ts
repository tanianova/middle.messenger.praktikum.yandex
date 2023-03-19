import Block from "../../utils/Block";
import template from "./ui.hbs";
import { registerInputs } from "./const";
import { Button } from "../../components/button";
import { Link } from "../../components/link";
import { InputField } from "../../components/inputField";
import { getFormData } from "../../helpers/getFormData";
import { Routes } from "../../index";
import AuthController from "../../controllers/AuthController";

export class RegisterPage extends Block {
  init() {
    this.children.registerInputs = registerInputs.map(input => new InputField({ ...input }));
    this.children.button = new Button({
      text: "Зарегистрироваться",
      type: "submit",
      class: "button",
      events: {
        click: (e: Event) => this.onSubmit(e),
      },
    });
    this.children.link = new Link({
      text: "Войти",
      to: Routes.Chat,
    });
  }

  onSubmit(e: Event) {
    e.preventDefault();
    const data = getFormData(this.getContent());
    AuthController.signup(data);
    console.log(data);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
