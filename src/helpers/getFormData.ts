import { validateInput } from "./validateInput";

/**
 * @description функция проверяет поля инпутов на валидацию и возвращает все данные из формы в виде объекта
 * @param {HTMLElement} element - элемент(в нашем случае страница), в котором будем искать все инпуты
 */
export const getFormData = (element: HTMLElement | null) => {
  if (!element) return;
  const inputs = (Array.from(element
    .querySelectorAll("input")));
  const values = inputs.filter(input => input.name)
    .map(input => {
      validateInput(input);
      return [input.name, input.value];
    });
  return Object.fromEntries(values);
};

/**
 * @description функция проверяет валидна ли форма
 * @param {HTMLElement} element - элемент(в нашем случае страница), в котором будем искать все инпуты
 */
export const formIsValid = (element: HTMLElement | null): boolean | undefined => {
  if (!element) return;
  const inputs = (Array.from(element
    .querySelectorAll("input")));
  const isValidArray = inputs.filter(input => input.name)
    .map(input => {
      return validateInput(input);
    });
  return isValidArray.every(value => value);
};
