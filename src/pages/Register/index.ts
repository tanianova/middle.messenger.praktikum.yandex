import Block from '../../utils/Block';
import template from './ui.hbs';
import { registerInputs } from './const';
import { Input } from '../../components/input';
import { Button } from '../../components/button';
import { RenderDom } from '../../utils/RenderDom';

export class RegisterPage extends Block {
  init() {
    this.children.registerInputs = registerInputs.map(input => new Input({ ...input }));
    this.children.button = new Button({
      text: 'Зарегистрироваться',
      type: 'submit',
      class: 'button',
    });
    this.children.link = new Button({
      text: 'Войти',
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
