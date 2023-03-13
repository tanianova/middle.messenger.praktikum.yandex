import Block from "../../utils/Block";
import template from "./ui.hbs";
import { ButtonCloseProps } from "./types";

export class ButtonClose extends Block {
  constructor(props: ButtonCloseProps) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
