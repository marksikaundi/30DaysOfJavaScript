const assert = require("assert");
const filter = require("./filteredArr");

describe("filter", () => {
  it("should return an empty array when given an empty array", () => {
    const arr = [];
    const result = filter(arr, () => true);
    assert.deepStrictEqual(result, []);
  });

  it("should return the same array when the filter function returns true for all elements", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = filter(arr, () => true);
    assert.deepStrictEqual(result, arr);
  });

  it("should return an empty array when the filter function returns false for all elements", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = filter(arr, () => false);
    assert.deepStrictEqual(result, []);
  });

  it("should return an array with elements that satisfy the filter function", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = filter(arr, (element) => element % 2 === 0);
    assert.deepStrictEqual(result, [2, 4]);
  });

  it("should return an array with elements that satisfy the filter function and their indices", () => {
    const arr = [2, 3];
    const result = filter(arr, (element, index) => element > index);
    assert.deepStrictEqual(result, [2, 3]);
  });
});
