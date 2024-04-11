const assert = require("assert");
const map = require("./Array Transformations");

describe("map", () => {
  it("should return an empty array when given an empty array", () => {
    const arr = [];
    const result = map(arr, (item) => item);
    assert.deepStrictEqual(result, []);
  });

  it("should return a new array with transformed values", () => {
    const arr = [1, 2, 3];
    const result = map(arr, (item) => item * 2);
    assert.deepStrictEqual(result, [2, 4, 6]);
  });

  it("should not modify the original array", () => {
    const arr = [1, 2, 3];
    map(arr, (item) => item * 2);
    assert.deepStrictEqual(arr, [1, 2, 3]);
  });
});
