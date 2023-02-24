import { INPUT_NAME } from './const';

const isValid = (input: HTMLInputElement): boolean => {
  if (!input.value || input.value === '') {
    return false;
  }
  const name = /^[A-ZЁА-Я][A-Za-zЁёА-Яа-я-]*$/;
  const login = /^(?=.*[A-Za-z])[A-Za-z\d-_]{3,20}$/;
  const email = /^[A-Za-z\d._%+-]+@[A-Za-z]+\.[A-Za-z]+$/;
  const password = /^(?=.*[A-Z])(?=.*\d).{8,40}$/;
  const phone = /^\+?\d{10,15}$/;
  const message = /^.+$/;

  switch (input.name) {
    case INPUT_NAME.first_name:
    case INPUT_NAME.second_name:
      return name.test(input.value);
    case INPUT_NAME.login:
      return login.test(input.value);
    case INPUT_NAME.email:
      return email.test(input.value);
    case INPUT_NAME.password:
      return password.test(input.value);
    case INPUT_NAME.phone:
      return phone.test(input.value);
    case INPUT_NAME.message:
      return message.test(input.value);
    default:
      return true;
  }

};

/**
 * @description функция возвращает булево значение для инпута(валидно/невалидно),
 * а так же показывает сообщение об ошибке под полем инпута
 * @param {HTMLInputElement} input - элемент(в нашем случае страница), в котором будем искать все инпуты
 * @returns {boolean}
 */
export const validateInput = (input: HTMLInputElement): boolean => {
  const error = input?.parentNode?.parentNode?.querySelector('p') as HTMLElement;
  if (isValid(input)) {
    error.style.display = 'none';
    return true;
  } else {
    error.style.display = 'block';
    return false;
  }
};
