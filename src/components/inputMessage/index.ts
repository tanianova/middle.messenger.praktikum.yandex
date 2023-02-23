import Block from '../../utils/Block';
import template from './ui.hbs';

export class InputMessage extends Block {
  input = this.element.children[0] as HTMLInputElement;

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
