import { Navigation } from '../components/navigation';
import { Error404Page } from '../pages/404';
import { Error500Page } from '../pages/500';
import { AuthPage } from '../pages/Auth';
import { ChatPage } from '../pages/Chat';
import { RegisterPage } from '../pages/Register';
import { ProfilePage } from '../pages/Profile';
import { ProfileEditInfoPage } from '../pages/ProfileEditInfo';
import { ProfileEditPasswordPage } from '../pages/ProfileEditPassword';

export const ROUTES = {
  '/': AuthPage,
  '404': Error404Page,
  '500': Error500Page,
  'register': RegisterPage,
  'chat': ChatPage,
  'profile': ProfilePage,
  'editInfo': ProfileEditInfoPage,
  'editPassword': ProfileEditPasswordPage,
};

export const RenderDom = (route: keyof typeof ROUTES) => {
  const root = document.querySelector('#app')!;

  root.innerHTML = '';

  const pageComponent = ROUTES[route];
  const page = new pageComponent();
  const navigation = new Navigation({});

  root.appendChild(navigation.element);

  root.appendChild(page.element);

  page.dispatchComponentDidMount();
};
