import Block from '../../utils/Block';
import { InputProps } from './types';
import template from './ui.hbs';

export class Input extends Block {
  input = this.element.children[0].children[0] as HTMLInputElement;

  constructor(props: InputProps) {
    super(props);
  }

  getName() {
    return this.input.name;
  }

  getValue() {
    return this.input.value;
  }

  render() {
    return this.compile(template, this.props);
  }
}
