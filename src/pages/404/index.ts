import Block from '../../utils/Block';
import template from './ui.hbs';
import { RenderDom } from '../../utils/RenderDom';
import { Button } from '../../components/button';

export class Error404Page extends Block {
  init() {
    this.children.chatLink = new Button({
      text: 'Назад к чатам',
      type: 'button',
      class: 'link',
      events: {
        click: () => {
          RenderDom('chat');
        },
      },
    });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
