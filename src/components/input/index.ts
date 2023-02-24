import Block from '../../utils/Block';
import template from './ui.hbs';
import { InputFieldProps } from '../inputField/types';

export class Input extends Block {
  input = this.element as HTMLInputElement;

  constructor(props: Record<string, InputFieldProps>) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
