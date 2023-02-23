import Block from '../../utils/Block';
import { LinkProps } from './types';
import template from './ui.hbs';

export class Link extends Block {
  constructor(props: LinkProps) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
