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
    });
    this.children.registrationLink = new Link({
      text: 'Нет аккаунта?',
      href: '/register',
    });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
