import Block from '../../utils/Block';
import template from './ui.hbs';
import { ButtonArrow } from '../../components/buttonArrow';
import { renderDom } from '../../utils/renderDom';
import { Avatar } from '../../components/avatar';
import { Input } from '../../components/input';
import { editInfoInputs } from './const';
import { Button } from '../../components/button';

export class ProfileEditInfoPage extends Block {
  init() {
    this.children.buttonArrow = new ButtonArrow({
      type: 'button',
      events: { click: () => renderDom('chat') },
    });
    this.children.avatar = new Avatar({class:"avatar-edit"});
    this.children.editInfoInputs = editInfoInputs.map(input => new Input({ ...input }));
    this.children.button = new Button({
      text: 'Сохранить',
      type: 'submit',
      class: 'button profile__button',
    });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
