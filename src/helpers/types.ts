export type Indexed<T = unknown> = {
  [key in string]: T;
};

export type PlainObject<T = any> = {
  [k in string]: T;
};
