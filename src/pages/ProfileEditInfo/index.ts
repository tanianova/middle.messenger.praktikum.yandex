import Block from '../../utils/Block';
import template from './ui.hbs';
import { ButtonArrow } from '../../components/buttonArrow';
import { Avatar } from '../../components/avatar';
import { Input } from '../../components/input';
import { editInfoInputs } from './const';
import { Button } from '../../components/button';

export class ProfileEditInfoPage extends Block {
  init() {
    this.children.buttonArrow = new ButtonArrow({
      type: 'button',
    });
    this.children.avatar = new Avatar({ class: 'avatar-edit' });
    this.children.editInfoInputs = editInfoInputs.map(input => new Input({ ...input }));
    this.children.button = new Button({
      text: 'Сохранить',
      type: 'submit',
      class: 'button profile__button',
      events: {
        click: (e: Event) => this.onSubmit(e),
      },
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
