import Block from '../../utils/Block';
import { InputFieldProps } from './types';
import template from './ui.hbs';
import { Input } from '../input';
import { ErrorMessage } from '../errorMessage';

export class InputField extends Block {
  constructor(props: InputFieldProps) {
    super(props);
  }

  init() {
    this.children.input = new Input({ ...this.props });
    this.children.errorMessage = new ErrorMessage({ text: this.props.errorMessage });
  }

  render() {
    return this.compile(template, this.props);
  }
}
