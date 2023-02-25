import Block from '../../utils/Block';
import template from './ui.hbs';
import { profileInputs } from './const';

import { ButtonArrow } from '../../components/buttonArrow';
import { Avatar } from '../../components/avatar';
import { Link } from '../../components/link';
import { InputField } from '../../components/inputField';

export class ProfilePage extends Block {
  init() {
    this.children.buttonArrow = new ButtonArrow({
      type: 'button',
    });
    this.children.avatar = new Avatar({});
    this.children.profileInputs = profileInputs.map(input => new InputField({ ...input }));
    this.children.editInfoLink = new Link({
      text: 'Изменить данные',
      href: '/profile/edit_info',
      class: 'profile__link',
    });
    this.children.editPasswordLink = new Link({
      text: 'Изменить пароль',
      href: '/profile/edit_password',
      class: 'profile__link',
    });
    this.children.exitLink = new Link({
      text: 'Выйти',
      href: '/',
      class: 'profile__link link-danger',
    });
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
