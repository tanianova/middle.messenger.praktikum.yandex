import Block from '../../utils/Block';
import template from './ui.hbs';
import { Button } from '../button';
import { InputAvatar } from '../inputAvatar';

export class PopupEditAvatar extends Block {
  init() {
    this.children.button = new Button({
      text: 'Поменять',
      type: 'submit',
      class: 'button popup__upload-button',
      events: {
        click: (e: Event) => this.onSubmit(e),
      },
    });
    this.children.inputAvatar = new InputAvatar()
  }

  onSubmit(e: Event) {
    e.preventDefault();
    const values = Object.values(this.children)
      .filter((child: Block) => child instanceof InputAvatar)
      .map((child: InputAvatar) => {
        return [child.getName(), child.getValue()];
      });
    const data = Object.fromEntries(values);
    console.log(data);
  }

  render() {
    return this.compile(template, {});
  }
}
