import { Indexed } from "./types";
import { isPlainObject } from "./isPlainObject";

export const merge = (lhs: Indexed, rhs: Indexed): Indexed => {
  for (const p in rhs) {
    if (Object.prototype.hasOwnProperty.call(rhs, p)) {
      try {
        if (isPlainObject(rhs[p])) {
          rhs[p] = merge(lhs[p] as Indexed, rhs[p] as Indexed);
        } else {
          lhs[p] = rhs[p];
        }
      } catch (e) {
        lhs[p] = rhs[p];
      }
    }
  }
  return lhs;
};
