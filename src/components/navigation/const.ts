import { Routes } from "../../index";

export const links = [
  {
    text: "Вход",
    to: Routes.Auth,
  }, {
    text: "404",
    to: Routes.Error404,
  }, {
    text: "500",
    to: Routes.Error500,
  }, {
    text: "Чаты",
    to: Routes.Chat,
  }, {
    text: "Регистрация",
    to: Routes.Register,
  }, {
    text: "Профиль",
    to: Routes.Profile,
  }, {
    text: "Изменить инфо",
    to: Routes.EditInfo,
  }, {
    text: "Изменить пароль",
    to: Routes.EditPassword,
  }];
