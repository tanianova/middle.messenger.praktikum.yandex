import { expect } from "chai";
import { isArrayOrObject } from "./isArrayOrObject";

describe("isArrayOrObject helper", () => {
  it("should accept plain object", () => {
    const result = isArrayOrObject({});
    expect(result).to.be.true;
  });

  it("should accept array", () => {
    const result = isArrayOrObject([]);
    expect(result).to.be.true;
  });

  it("should reject string", () => {
    const result = isArrayOrObject("");
    expect(result).to.be.false;
  });

  it("should reject number", () => {
    const result = isArrayOrObject(3);
    expect(result).to.be.false;
  });
});
