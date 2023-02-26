import { ERROR_MESSAGE, INPUT_NAME } from "../../utils/const";
import { validateInput } from "../../utils/validateInput";

export const authInputs = [
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
