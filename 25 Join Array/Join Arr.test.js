const assert = require("assert");
const join = require("./Join Arr");

describe("join", () => {
  it("should join two arrays and return the sorted result", () => {
    const arr1 = [
      { id: 1, name: "John" },
      { id: 2, name: "Jane" },
    ];
    const arr2 = [
      { id: 3, name: "Alice" },
      { id: 4, name: "Bob" },
    ];
    const result = join(arr1, arr2);
    assert.deepStrictEqual(result, [
      { id: 1, name: "John" },
      { id: 2, name: "Jane" },
      { id: 3, name: "Alice" },
      { id: 4, name: "Bob" },
    ]);
  });

  it("should merge objects with the same id", () => {
    const arr1 = [
      { id: 1, name: "John" },
      { id: 2, name: "Jane" },
    ];
    const arr2 = [
      { id: 1, age: 25 },
      { id: 2, age: 30 },
    ];
    const result = join(arr1, arr2);
    assert.deepStrictEqual(result, [
      { id: 1, name: "John", age: 25 },
      { id: 2, name: "Jane", age: 30 },
    ]);
  });

  it("should handle empty arrays", () => {
    const arr1 = [];
    const arr2 = [];
    const result = join(arr1, arr2);
    assert.deepStrictEqual(result, []);
  });
});
