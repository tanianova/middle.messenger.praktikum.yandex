import Block from "../../utils/Block";
import template from "./ui.hbs";
import { Link } from "../../components/link";
import { Routes } from "../../index";

export class Error500Page extends Block {
  init() {
    this.children.chatLink = new Link({
      text: "Назад к чатам",
      to: Routes.Chat,
    });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
