import { INPUT_NAME } from "../../utils/const";

export const profileInputs = [
  {
    type: "email",
    name: INPUT_NAME.email,
    label: "Почта",
    value: "pochta@yandex.ru",
    readonly: true,
  },
  {
    type: "text",
    name: INPUT_NAME.login,
    label: "Логин",
    value: "ivanivanov",
    readonly: true,
  },
  {
    type: "text",
    name: INPUT_NAME.first_name,
    label: "Имя",
    value: "Иван",
    readonly: true,
  },
  {
    type: "text",
    name: INPUT_NAME.second_name,
    label: "Фамилия",
    value: "Иванов",
    readonly: true,
  },
  {
    type: "text",
    name: INPUT_NAME.display_name,
    label: "Имя в чате",
    value: "Иван",
    readonly: true,
  },
  {
    type: "tel",
    name: INPUT_NAME.phone,
    label: "Телефон",
    value: "+7 (909) 967 30 30",
    readonly: true,
  },
];
