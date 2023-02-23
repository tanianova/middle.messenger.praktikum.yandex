import { RenderDom } from './utils/RenderDom';
import './styles/index.pcss';
import { AuthPage } from './pages/Auth';
import { Error404Page } from './pages/404';
import { Error500Page } from './pages/500';
import { RegisterPage } from './pages/Register';
import { ChatPage } from './pages/Chat';
import { ProfilePage } from './pages/Profile';
import { ProfileEditInfoPage } from './pages/ProfileEditInfo';
import { ProfileEditPasswordPage } from './pages/ProfileEditPassword';
import Block from './utils/Block';

type Route = Record<string, typeof Block>;

export const ROUTES: Route = {
  '/': AuthPage,
  '/404': Error404Page,
  '/500': Error500Page,
  '/register': RegisterPage,
  '/chat': ChatPage,
  '/profile': ProfilePage,
  '/profile/edit_info': ProfileEditInfoPage,
  '/profile/edit_password': ProfileEditPasswordPage,
};

const pageToRender = ROUTES[window.location.pathname];

window.addEventListener('DOMContentLoaded', () => {
  RenderDom(new pageToRender());
});
