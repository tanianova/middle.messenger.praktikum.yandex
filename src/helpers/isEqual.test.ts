import { expect } from "chai";
import { isEqual } from "./isEqual";

describe("isEqual helper", () => {
  const obj1 = { a: 1 };
  it("should accept equal object", () => {
    const obj2 = { a: 1 };
    const result = isEqual(obj1, obj2);
    expect(result).to.be.true;
  });

  it("should reject objects with different length", () => {
    const obj2 = {
      a: 1,
      c: 3,
    };
    const result = isEqual(obj1, obj2);
    expect(result).to.be.false;
  });


});
