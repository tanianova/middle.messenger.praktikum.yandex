import { Block } from "../../utils/Block";
import  template  from "./ui.hbs";
import { ButtonProps } from "./types";

export class Button extends Block {
  constructor(props: ButtonProps) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
