import { Block } from "../../utils/Block";
import  template  from "./ui.hbs";
import { InputFieldProps } from "../inputField/types";
import { validateInput } from "../../helpers/validateInput";

export class Input extends Block {
  constructor(props: Record<string, InputFieldProps>) {
    super({
      ...props,
      events: {
        blur: validateInput,
      },
    });
  }

  render() {
    return this.compile(template, this.props);
  }
}
