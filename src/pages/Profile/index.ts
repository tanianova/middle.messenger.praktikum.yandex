import Block from '../../utils/Block';
import template from './ui.hbs';
import { profileInputs } from './const';

import { ButtonArrow } from '../../components/buttonArrow';
import { Input } from '../../components/input';
import { Avatar } from '../../components/avatar';
import { PopupEditAvatar } from '../../components/popupEditAvatar';
import { Button } from '../../components/button';
import { RenderDom } from '../../utils/RenderDom';

export class ProfilePage extends Block {
  init() {
    this.children.buttonArrow = new ButtonArrow({
      type: 'button',
      events: { click: () => RenderDom('chat') },
    });
    this.children.avatar = new Avatar({});
    this.children.profileInputs = profileInputs.map(input => new Input({ ...input }));
    this.children.editInfoLink = new Button({
      text: 'Изменить данные',
      type: 'button',
      class: 'link profile__link',
      events: {
        click: () => {
          RenderDom('editInfo');
        },
      },
    });
    this.children.editPasswordLink = new Button({
      text: 'Изменить пароль',
      type: 'button',
      class: 'link profile__link',
      events: {
        click: () => {
          RenderDom('editPassword');
        },
      },
    });
    this.children.exitLink = new Button({
      text: 'Выйти',
      type: 'button',
      class: 'link profile__link link-danger',
      events: {
        click: () => {
          RenderDom('/');
        },
      },
    });
    this.children.popup = new PopupEditAvatar();
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
