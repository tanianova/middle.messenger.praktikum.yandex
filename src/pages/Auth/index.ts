import Block from '../../utils/Block';
import template from './ui.hbs';
import { Button } from '../../components/button';
import { Link } from '../../components/link';
import { InputField } from '../../components/inputField';
import { getFormData } from '../../utils/getFormData';
import { authInputs } from './const';

export class AuthPage extends Block {
  init() {
    this.children.authInputs = authInputs.map(input=>new InputField({...input}))
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
    const data = getFormData(this.getContent());
    console.log(data);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
