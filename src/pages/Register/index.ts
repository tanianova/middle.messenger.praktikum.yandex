import Block from '../../utils/Block';
import template from './ui.hbs';
import { registerInputs } from './const';
import { Input } from '../../components/input';
import { Button } from '../../components/button';
import { Link } from '../../components/link';

export class RegisterPage extends Block {
  init() {
    this.children.registerInputs = registerInputs.map(input => new Input({ ...input }));
    this.children.button = new Button({
      text: 'Зарегистрироваться',
      type: 'submit',
      class: 'button',
      events: {
        click: (e: Event) => this.onSubmit(e),
      },
    });
    this.children.link = new Link({
      text: 'Войти',
      href: '/chat',
    });
  }

  onSubmit(e: Event) {
    e.preventDefault();
    const inputs: string[][] = [];
    Object.values(this.children)
      .filter((child: Block) => Array.isArray(child))
      .map((child: Input[]) => {
        child.map(input => {
          inputs.push([input.getName(), input.getValue()]);
        });
      });

    const data = Object.fromEntries(inputs);
    console.log(data);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
