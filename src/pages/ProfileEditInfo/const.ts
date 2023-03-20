import { ERROR_MESSAGE, INPUT_NAME } from "../../helpers/const";

export const editInfoInputs = [
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
    type: "text",
    name: INPUT_NAME.display_name,
    label: "Имя в чате",
    errorMessage: ERROR_MESSAGE.isRequired,
  },
  {
    type: "tel",
    name: INPUT_NAME.phone,
    label: "Телефон",
    errorMessage: ERROR_MESSAGE.phone,
  },
];
