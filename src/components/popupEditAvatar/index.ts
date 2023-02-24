import Block from '../../utils/Block';
import template from './ui.hbs';
import { Button } from '../button';
import { InputAvatar } from '../inputAvatar';
import { getFormData } from '../../utils/getFormData';

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
    const data = getFormData(this.getContent())
    console.log(data);
  }

  render() {
    return this.compile(template, {});
  }
}
