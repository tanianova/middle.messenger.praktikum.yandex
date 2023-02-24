import Block from '../../utils/Block';
import template from './ui.hbs';

export class InputAvatar extends Block {
  render() {
    return this.compile(template, this.props);
  }
}
