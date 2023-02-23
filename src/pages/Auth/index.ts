import Block from '../../utils/Block';
import template from './ui.hbs';
import { Button } from '../../components/button';
import { Input } from '../../components/input';
import { Link } from '../../components/link';

export class AuthPage extends Block {
  init() {
    this.children.loginInput = new Input({
      type: 'text',
      name: 'login',
      label: 'Логин',
      required: true,
    });
    this.children.passwordInput = new Input({
      type: 'password',
      name: 'password',
      label: 'Пароль',
      required: true,
    });
    this.children.authButton = new Button({
      text: 'Авторизоваться',
      type: 'submit',
      class: 'button',
      events: {
        click: (e: Event) => this.onSubmit(e),
      },
    });
    this.children.registrationLink = new Link({
      text: 'Нет аккаунта?',
      href: '/register',
    });
  }

  onSubmit(e: Event) {
    e.preventDefault();
    const values = Object.values(this.children)
      .filter((child: Block) => child instanceof Input)
      .map((child: Input) => {
        return [child.getName(), child.getValue()];
      });
    const data = Object.fromEntries(values);
    console.log(data);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
