import { Block } from "../../utils/Block";
import  template  from "./ui.hbs";
import { ButtonArrowProps } from "./types";

export class ButtonArrow extends Block {
  constructor(props: ButtonArrowProps) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
