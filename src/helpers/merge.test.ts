import { expect } from "chai";
import { merge } from "./merge";

describe("merge helper", () => {
  it("should merge two objects, saving their unique keys", () => {
    const obj1 = {
      a: { b: { a: 2 } },
      d: 5,
    };
    const obj2 = { a: { b: { c: 1 } } };
    const result = merge(obj1, obj2);
    expect(result)
      .to
      .deep
      .equal({
        a: {
          b: {
            a: 2,
            c: 1,
          },
        },
        d: 5,
      });
  });
});
