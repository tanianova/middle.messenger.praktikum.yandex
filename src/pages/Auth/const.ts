import { ERROR_MESSAGE, INPUT_NAME } from '../../utils/const';
import { validateInput } from '../../utils/validate';

export const authInputs = [
  {
    type: 'text',
    name: INPUT_NAME.login,
    label: 'Логин',
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
    type: 'password',
    name: INPUT_NAME.password,
    label: 'Пароль',
    required: true,
    events: {
      blur: (event: Event) => {
        const input = event.target as HTMLInputElement;
        validateInput(input);
      },
    },
    errorMessage: ERROR_MESSAGE.password,
  },
];
