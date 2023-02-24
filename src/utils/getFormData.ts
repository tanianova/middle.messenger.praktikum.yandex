import { validateInput } from './validateInput';

/**
 * @description функция проверяет поля инпутов на валидацию и возвращает все данные из формы в виде объекта
 * @param {HTMLElement} element - элемент(в нашем случае страница), в котором будем искать все инпуты
 */
export const getFormData = (element: HTMLElement) => {
  const inputs = (Array.from(element
    .querySelectorAll('input')));
  const values = inputs.filter(input => input.name)
    .map(input => {
      validateInput(input);
      return [input.name, input.value];
    });
  return Object.fromEntries(values);
};
