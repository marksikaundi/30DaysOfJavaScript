const assert = require("assert");
const flat = require("./Nested Array");

describe("flat", () => {
  it("should flatten a deeply nested array with depth 1", () => {
    const arr = [1, [2, [3, [4, [5]]]]];
    const result = flat(arr, 1);
    assert.deepStrictEqual(result, [1, 2, [3, [4, [5]]]]);
  });

  it("should flatten a deeply nested array with depth 2", () => {
    const arr = [1, [2, [3, [4, [5]]]]];
    const result = flat(arr, 2);
    assert.deepStrictEqual(result, [1, 2, 3, [4, [5]]]);
  });

  it("should flatten a deeply nested array with depth 3", () => {
    const arr = [1, [2, [3, [4, [5]]]]];
    const result = flat(arr, 3);
    assert.deepStrictEqual(result, [1, 2, 3, 4, [5]]);
  });

  it("should flatten a deeply nested array with depth 4", () => {
    const arr = [1, [2, [3, [4, [5]]]]];
    const result = flat(arr, 4);
    assert.deepStrictEqual(result, [1, 2, 3, 4, 5]);
  });

  it("should return the original array if depth is 0", () => {
    const arr = [1, [2, [3, [4, [5]]]]];
    const result = flat(arr, 0);
    assert.deepStrictEqual(result, arr);
  });
});
