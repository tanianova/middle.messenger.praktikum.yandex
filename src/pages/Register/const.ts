import { ERROR_MESSAGE, INPUT_NAME } from "../../utils/const";
import { validateInput } from "../../utils/validateInput";

export const registerInputs = [
  {
    type: "email",
    name: INPUT_NAME.email,
    label: "Почта",
    required: true,
    events: {
      blur: validateInput
    },
    errorMessage: ERROR_MESSAGE.email,
  },
  {
    type: "text",
    name: INPUT_NAME.login,
    label: "Логин",
    required: true,
    events: {
      blur: validateInput
    },
    errorMessage: ERROR_MESSAGE.login,
  },
  {
    type: "text",
    name: INPUT_NAME.first_name,
    label: "Имя",
    required: true,
    events: {
      blur: validateInput
    },
    errorMessage: ERROR_MESSAGE.name,
  },
  {
    type: "text",
    name: INPUT_NAME.second_name,
    label: "Фамилия",
    required: true,
    events: {
      blur: validateInput
    },
    errorMessage: ERROR_MESSAGE.name,
  },
  {
    type: "tel",
    name: INPUT_NAME.phone,
    label: "Телефон",
    required: true,
    events: {
      blur: validateInput
    },
    errorMessage: ERROR_MESSAGE.phone,
  },
  {
    type: "password",
    name: INPUT_NAME.password,
    label: "Пароль",
    required: true,
    events: {
      blur: validateInput
    },
    errorMessage: ERROR_MESSAGE.password,
  },
];
