import Block from '../../utils/Block';
import template from './ui.hbs';
import { profileInputs } from './const';

import { ButtonArrow } from '../../components/buttonArrow';
import { Input } from '../../components/input';
import { Avatar } from '../../components/avatar';
import { PopupEditAvatar } from '../../components/popupEditAvatar';
import { Button } from '../../components/button';
import { renderDom } from '../../utils/renderDom';

export class ProfilePage extends Block {
  init() {
    this.children.buttonArrow = new ButtonArrow({
      type: 'button',
      events: { click: () => renderDom('chat') },
    });
    this.children.avatar = new Avatar({});
    this.children.profileInputs = profileInputs.map(input => new Input({ ...input }));
    this.children.editInfoLink = new Button({
      text: 'Изменить данные',
      type: 'button',
      class: 'link profile__link',
      events: {
        click: () => {
          renderDom('editInfo');
        },
      },
    });
    this.children.editPasswordLink = new Button({
      text: 'Изменить пароль',
      type: 'button',
      class: 'link profile__link',
      events: {
        click: () => {
          renderDom('editPassword');
        },
      },
    });
    this.children.exitLink = new Button({
      text: 'Выйти',
      type: 'button',
      class: 'link profile__link link-danger',
      events: {
        click: () => {
          renderDom('/');
        },
      },
    });
    this.children.popup = new PopupEditAvatar();
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
