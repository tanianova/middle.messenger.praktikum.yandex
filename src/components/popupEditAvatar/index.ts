import Block from '../../utils/Block';
import template from './ui.hbs';
import { Button } from '../button';
import { InputAvatar } from '../inputAvatar';
import { getFormData } from '../../utils/getFormData';
import { PopupEditAvatarProps } from './types';
import { ButtonClose } from '../buttonClose';

export class PopupEditAvatar extends Block {
  constructor(props: PopupEditAvatarProps) {
    super(props);
  }
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
    this.children.closeButton = new ButtonClose({
      events: this.props.events
    })
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
