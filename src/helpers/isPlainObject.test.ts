import { isPlainObject } from "./isPlainObject";
import { expect } from "chai";

describe("isPlainObject helper", () => {
  it("should accept plain object", () => {
    const result = isPlainObject({});
    expect(result).to.be.true;
  });

  it("should reject string", () => {
    const result = isPlainObject("");
    expect(result).to.be.false;
  });

  it("should reject number", () => {
    const result = isPlainObject(3);
    expect(result).to.be.false;
  });
});
