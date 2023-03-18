import "./styles/index.pcss";
import { AuthPage } from "./pages/Auth";
import { Error404Page } from "./pages/404";
import { Error500Page } from "./pages/500";
import { RegisterPage } from "./pages/Register";
import { ChatPage } from "./pages/Chat";
import { ProfilePage } from "./pages/Profile";
import { ProfileEditInfoPage } from "./pages/ProfileEditInfo";
import { ProfileEditPasswordPage } from "./pages/ProfileEditPassword";
import Router from "./utils/Router";

export enum Routes {
  Auth = "/",
  Register = "/register",
  Error404 = "/404",
  Error500 = "/500",
  Chat = "/messenger",
  Profile = "/settings",
  EditInfo = "/edit-info",
  EditPassword = "/edit-password"
}

window.addEventListener("DOMContentLoaded", async () => {
  Router
    .use(Routes.Auth, AuthPage)
    .use(Routes.Register, RegisterPage)
    .use(Routes.Error404, Error404Page)
    .use(Routes.Error500, Error500Page)
    .use(Routes.Chat, ChatPage)
    .use(Routes.Profile, ProfilePage)
    .use(Routes.EditInfo, ProfileEditInfoPage)
    .use(Routes.EditPassword, ProfileEditPasswordPage);

  let isProtectedRoute = true;

  switch (window.location.pathname) {
    case Routes.Auth:
    case Routes.Register:
      isProtectedRoute = false;
      break;
  }

  try {
    // await AuthController.fetchUser();

    Router.start();

    if (!isProtectedRoute) {
      Router.go(Routes.Profile);
    }
  } catch (e) {
    Router.start();

    if (isProtectedRoute) {
      Router.go(Routes.Auth);
    }
  }

});
