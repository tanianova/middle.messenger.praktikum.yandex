import { ERROR_MESSAGE, INPUT_NAME } from "../../helpers/const";

export const editPasswordInputs = [
  {
    type: "password",
    name: INPUT_NAME.oldPassword,
    label: "Старый пароль",
    errorMessage: ERROR_MESSAGE.password,
  },
  {
    type: "password",
    name: INPUT_NAME.newPassword,
    label: "Новый пароль",
    errorMessage: ERROR_MESSAGE.password,
  },
];
