import { ERROR_MESSAGE, INPUT_NAME } from "../../utils/const";
import { validateInput } from "../../utils/validateInput";

export const editPasswordInputs = [
  {
    type: "password",
    name: INPUT_NAME.oldPassword,
    label: "Старый пароль",
    value: "ivanivanov",
    events: {
      blur: validateInput,
    },
    errorMessage: ERROR_MESSAGE.password,
  },
  {
    type: "password",
    name: INPUT_NAME.newPassword,
    label: "Новый пароль",
    value: "ivanivanov",
    events: {
      blur: validateInput,
    },
    errorMessage: ERROR_MESSAGE.password,
  },
];
