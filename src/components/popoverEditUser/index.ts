import Block from "../../utils/Block";
import template from "./ui.hbs";

export class PopoverEditUser extends Block {
  render() {
    return this.compile(template, {});
  }
}
