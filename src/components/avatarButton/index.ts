import Block from '../../utils/Block';
import template from '../avatarButton/ui.hbs';
import { AvatarProps } from '../avatar/types';

export class AvatarButton extends Block {
  constructor(props: AvatarProps) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
