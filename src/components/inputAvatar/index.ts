import Block from '../../utils/Block';
import template from './ui.hbs';

export class InputAvatar extends Block {
  input = this.element.children[1] as HTMLInputElement;

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
