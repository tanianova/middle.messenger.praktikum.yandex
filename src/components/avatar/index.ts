import Block from '../../utils/Block';
import template from './ui.hbs';
import { AvatarProps } from './types';

export class Avatar extends Block {
  constructor(props: AvatarProps) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
