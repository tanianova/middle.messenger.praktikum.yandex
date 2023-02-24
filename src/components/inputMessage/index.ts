import Block from '../../utils/Block';
import template from './ui.hbs';
import { InputMessageProps } from './types';

export class InputMessage extends Block {
  constructor(props: InputMessageProps) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
