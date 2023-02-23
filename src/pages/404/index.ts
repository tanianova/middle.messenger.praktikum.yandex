import Block from '../../utils/Block';
import template from './ui.hbs';
import { renderDom } from '../../utils/renderDom';
import { Button } from '../../components/button';

export class Error404Page extends Block {
  init() {
    this.children.chatLink = new Button({
      text: 'Назад к чатам',
      type: 'button',
      class: 'link',
      events: {
        click: () => {
          renderDom('chat');
        },
      },
    });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
