const assert = require("assert");
const compactObject = require("./compact Object");

describe("compactObject", () => {
  it("should return the compacted object with no falsy values", () => {
    const obj = {
      name: "John",
      age: 30,
      address: {
        street: "123 Main St",
        city: "",
        country: "USA",
      },
      hobbies: ["reading", "", "coding"],
    };
    const result = compactObject(obj);
    const expected = {
      name: "John",
      age: 30,
      address: {
        street: "123 Main St",
        country: "USA",
      },
      hobbies: ["reading", "coding"],
    };
    assert.deepStrictEqual(result, expected);
  });

  it("should return the same object if there are no falsy values", () => {
    const obj = {
      name: "John",
      age: 30,
      address: {
        street: "123 Main St",
        city: "New York",
        country: "USA",
      },
      hobbies: ["reading", "coding"],
    };
    const result = compactObject(obj);
    assert.deepStrictEqual(result, obj);
  });

  it("should return an empty object if the input object is empty", () => {
    const obj = {};
    const result = compactObject(obj);
    assert.deepStrictEqual(result, {});
  });

  it("should return the same array if there are no falsy values", () => {
    const arr = [1, 2, 3];
    const result = compactObject(arr);
    assert.deepStrictEqual(result, arr);
  });

  it("should return the compacted array with no falsy values", () => {
    const arr = [1, null, 3, undefined, 5, "", 7];
    const result = compactObject(arr);
    const expected = [1, 3, 5, 7];
    assert.deepStrictEqual(result, expected);
  });
});
