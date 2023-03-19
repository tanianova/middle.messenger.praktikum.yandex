import { PlainObject } from "./types";
import { isPlainObject } from "./isPlainObject";

export const isArrayOrObject = (value: unknown): value is [] | PlainObject => {
  return isPlainObject(value) || Array.isArray(value);
};
