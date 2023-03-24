import Block from "../../utils/Block";
import template from "./ui.hbs";
import { InputMessageProps } from "./types";
import { validateInput } from "../../helpers/validateInput";

export class InputMessage extends Block {
  constructor(props: InputMessageProps) {
    super({
      ...props,
      events: {
        blur: validateInput,
      },
    });
  }

  setValue(value: string) {
    return (this.element as HTMLInputElement).value = value;
  }

  render() {
    return this.compile(template, this.props);
  }
}
