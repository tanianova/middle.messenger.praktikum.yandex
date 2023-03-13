import Block from "../../utils/Block";
import template from "./ui.hbs";
import { ErrorMessageProps } from "./types";

export class ErrorMessage extends Block {
  constructor(props: ErrorMessageProps) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
