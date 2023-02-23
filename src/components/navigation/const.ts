import { renderDom } from '../../utils/renderDom';

export const links = [{
  text: 'Вход',
  type: 'button',
  class: 'link',
  events: {
    click: () => {
      renderDom('/');
    },
  },
}, {
  text: '404',
  type: 'button',
  class: 'link',
  events: {
    click: () => {
      renderDom('404');
    },
  },
}, {
  text: '500',
  type: 'button',
  class: 'link',
  events: {
    click: () => {
      renderDom('500');
    },
  },
}, {
  text: 'Чаты',
  type: 'button',
  class: 'link',
  events: {
    click: () => {
      renderDom('chat');
    },
  },
}, {
  text: 'Регистрация',
  type: 'button',
  class: 'link',
  events: {
    click: () => {
      renderDom('register');
    },
  },
}, {
  text: 'Профиль',
  type: 'button',
  class: 'link',
  events: {
    click: () => {
      renderDom('profile');
    },
  },
}, {
  text: 'Изменить инфо',
  type: 'button',
  class: 'link',
  events: {
    click: () => {
      renderDom('editInfo');
    },
  },
}, {
  text: 'Изменить пароль',
  type: 'button',
  class: 'link',
  events: {
    click: () => {
      renderDom('editPassword');
    },
  },
}];
