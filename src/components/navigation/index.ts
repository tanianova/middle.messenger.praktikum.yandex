import Block from '../../utils/Block';
import template from './ui.hbs';

import { Button } from '../button';
import { links } from './const';

export class Navigation extends Block {
  init() {
    this.children.links = links.map(link => {
      return new Button({ ...link });
    });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
