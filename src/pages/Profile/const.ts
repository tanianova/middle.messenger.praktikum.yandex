import { INPUT_NAME } from "../../helpers/const";

export const profileInputs = [
  {
    type: "email",
    name: INPUT_NAME.email,
    label: "Почта",
  },
  {
    type: "text",
    name: INPUT_NAME.login,
    label: "Логин",
  },
  {
    type: "text",
    name: INPUT_NAME.first_name,
    label: "Имя",
  },
  {
    type: "text",
    name: INPUT_NAME.second_name,
    label: "Фамилия",
  },
  {
    type: "text",
    name: INPUT_NAME.display_name,
    label: "Имя в чате",
  },
  {
    type: "tel",
    name: INPUT_NAME.phone,
    label: "Телефон",
  },
];
