/**
 * @description функция возвращает все данные из формы в виде объекта
 * @param {HTMLElement} element - элемент(в нашем случае страница), в котором будем искать все инпуты
 */
export const getFormData = (element: HTMLElement) => {
  const inputs = (Array.from(element
    .querySelectorAll('input')));
  const values = inputs.filter(input => input.name)
    .map(value => {
      return [value.name, value.value];
    });
  return Object.fromEntries(values);
};
