import Block from '../../utils/Block';
import { InputProps } from './types';
import template from './ui.hbs';

export class Input extends Block {
  constructor(props: InputProps) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
