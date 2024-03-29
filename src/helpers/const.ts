export const INPUT_NAME = {
  first_name: "first_name",
  second_name: "second_name",
  login: "login",
  email: "email",
  password: "password",
  phone: "phone",
  message: "message",
  display_name: "display_name",
  oldPassword: "oldPassword",
  newPassword: "newPassword",
};

export const ERROR_MESSAGE = {
  name: "Латиница или кириллица, первая буква должна быть заглавной, без пробелов и без цифр, нет спецсимволов (допустим только дефис).",
  login: "От 3 до 20 символов, латиница, может содержать цифры, но не состоять из них, без пробелов, без спецсимволов (допустимы дефис и нижнее подчёркивание).",
  email: "Латиница, может включать цифры и спецсимволы вроде дефиса, обязательно должна быть «собака» (@) и точка после неё, но перед точкой обязательно должны быть буквы.",
  password: "От 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра.",
  phone: "От 10 до 15 символов, состоит из цифр, может начинается с плюса.",
  isRequired: "Поле обязательно для заполнения ",
};

export const BASE_URL = "https://ya-praktikum.tech/api/v2";
