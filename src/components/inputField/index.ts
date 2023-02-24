import Block from '../../utils/Block';
import { InputFieldProps } from './types';
import template from './ui.hbs';
import { Input } from '../input';

export class InputField extends Block {
  constructor(props: InputFieldProps) {
    super(props);
  }

  init() {
    this.children.input = new Input({ ...this.props });
  }

  render() {
    return this.compile(template, this.props);
  }
}
