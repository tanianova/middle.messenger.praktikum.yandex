import { ERROR_MESSAGE, INPUT_NAME } from "../../utils/const";
import { validateInput } from "../../utils/validateInput";

export const editInfoInputs = [
  {
    type: "email",
    name: INPUT_NAME.email,
    label: "Почта",
    value: "pochta@yandex.ru",
    required: true,
    events: {
      blur: (event: Event) => {
        const input = event.target as HTMLInputElement;
        validateInput(input);
      },
    },
    errorMessage: ERROR_MESSAGE.email,
  },
  {
    type: "text",
    name: INPUT_NAME.login,
    label: "Логин",
    value: "ivanivanov",
    required: true,
    events: {
      blur: (event: Event) => {
        const input = event.target as HTMLInputElement;
        validateInput(input);
      },
    },
    errorMessage: ERROR_MESSAGE.login,
  },
  {
    type: "text",
    name: INPUT_NAME.first_name,
    label: "Имя",
    value: "Иван",
    required: true,
    events: {
      blur: (event: Event) => {
        const input = event.target as HTMLInputElement;
        validateInput(input);
      },
    },
    errorMessage: ERROR_MESSAGE.name,
  },
  {
    type: "text",
    name: INPUT_NAME.second_name,
    label: "Фамилия",
    value: "Иванов",
    required: true,
    events: {
      blur: (event: Event) => {
        const input = event.target as HTMLInputElement;
        validateInput(input);
      },
    },
    errorMessage: ERROR_MESSAGE.name,
  },
  {
    type: "text",
    name: INPUT_NAME.display_name,
    label: "Имя в чате",
    value: "Иван",
    required: true,
    events: {
      blur: (event: Event) => {
        const input = event.target as HTMLInputElement;
        validateInput(input);
      },
    },
    errorMessage: ERROR_MESSAGE.isRequired,
  },
  {
    type: "tel",
    name: INPUT_NAME.phone,
    label: "Телефон",
    value: "+7(909)9673030",
    required: true,
    events: {
      blur: (event: Event) => {
        const input = event.target as HTMLInputElement;
        validateInput(input);
      },
    },
    errorMessage: ERROR_MESSAGE.phone,
  },
];
