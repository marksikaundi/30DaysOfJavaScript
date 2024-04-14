const assert = require("assert");
const chunk = require("./Chunks Arry");

describe("chunk", () => {
  it("should return an empty array when given an empty array", () => {
    const result = chunk([], 2);
    assert.deepStrictEqual(result, []);
  });

  it("should return the original array when size is greater than or equal to the array length", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = chunk(arr, 5);
    assert.deepStrictEqual(result, [arr]);
  });

  it("should split the array into chunks of the specified size", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const result = chunk(arr, 3);
    assert.deepStrictEqual(result, [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ]);
  });

  it("should handle cases where the array length is not divisible by the chunk size", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const result = chunk(arr, 4);
    assert.deepStrictEqual(result, [[1, 2, 3, 4], [5, 6, 7, 8], [9]]);
  });
});
