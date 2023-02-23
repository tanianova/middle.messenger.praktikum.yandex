import { RenderDom } from '../../utils/RenderDom';

export const links = [{
  text: 'Вход',
  type: 'button',
  class: 'link',
  events: {
    click: () => {
      RenderDom('/');
    },
  },
}, {
  text: '404',
  type: 'button',
  class: 'link',
  events: {
    click: () => {
      RenderDom('404');
    },
  },
}, {
  text: '500',
  type: 'button',
  class: 'link',
  events: {
    click: () => {
      RenderDom('500');
    },
  },
}, {
  text: 'Чаты',
  type: 'button',
  class: 'link',
  events: {
    click: () => {
      RenderDom('chat');
    },
  },
}, {
  text: 'Регистрация',
  type: 'button',
  class: 'link',
  events: {
    click: () => {
      RenderDom('register');
    },
  },
}, {
  text: 'Профиль',
  type: 'button',
  class: 'link',
  events: {
    click: () => {
      RenderDom('profile');
    },
  },
}, {
  text: 'Изменить инфо',
  type: 'button',
  class: 'link',
  events: {
    click: () => {
      RenderDom('editInfo');
    },
  },
}, {
  text: 'Изменить пароль',
  type: 'button',
  class: 'link',
  events: {
    click: () => {
      RenderDom('editPassword');
    },
  },
}];
