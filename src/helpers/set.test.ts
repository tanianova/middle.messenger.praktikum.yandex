import { expect } from "chai";
import { set } from "./set";
import { Indexed } from "./types";

describe("set helper", () => {
  //arrange
  let obj = {};
  const path = "a.b";
  const value = 3;

  beforeEach(() => {
    obj = {};
  });

  it("should set a value by keypath", () => {
    //act
    const result = set(obj, path, value) as Indexed;

    //assert
    expect(result.a.b)
      .to
      .eq(value);
  });

  it("should return passed `object` parameter if it is not an object", () => {
    //arrange
    const notObj = "string";

    //act
    const result = set(notObj, path, value) as Indexed;

    //assert
    expect(result)
      .to
      .eq(notObj);
  });

  it("should throw an Error if passed `path` parameter is not a string", () => {
    const notAStringPath = 3;
    const func = () => set(obj, notAStringPath, value);
    expect(func)
      .to
      .throw(Error);
  });

  it("should mutate passed object, not create a new one", () => {
    //act
    set(obj, path, value) as Indexed;

    //assert
    expect(obj)
      .to
      .haveOwnProperty("a");
  });
});
