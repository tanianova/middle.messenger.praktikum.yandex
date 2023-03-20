import { ERROR_MESSAGE, INPUT_NAME } from "../../helpers/const";

export const registerInputs = [
  {
    type: "email",
    name: INPUT_NAME.email,
    label: "Почта",
    errorMessage: ERROR_MESSAGE.email,
  },
  {
    type: "text",
    name: INPUT_NAME.login,
    label: "Логин",
    errorMessage: ERROR_MESSAGE.login,
  },
  {
    type: "text",
    name: INPUT_NAME.first_name,
    label: "Имя",
    errorMessage: ERROR_MESSAGE.name,
  },
  {
    type: "text",
    name: INPUT_NAME.second_name,
    label: "Фамилия",
    errorMessage: ERROR_MESSAGE.name,
  },
  {
    type: "tel",
    name: INPUT_NAME.phone,
    label: "Телефон",
    errorMessage: ERROR_MESSAGE.phone,
  },
  {
    type: "password",
    name: INPUT_NAME.password,
    label: "Пароль",
    errorMessage: ERROR_MESSAGE.password,
  },
];
