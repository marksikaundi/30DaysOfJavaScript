const assert = require("assert");
const sortBy = require("./Sort By");

describe("sortBy", () => {
  it("should sort the array based on the provided function", () => {
    const arr = [5, 2, 8, 1, 10];
    const result = sortBy(arr, (num) => num);
    assert.deepStrictEqual(result, [1, 2, 5, 8, 10]);
  });

  it("should sort the array in descending order based on the provided function", () => {
    const arr = [5, 2, 8, 1, 10];
    const result = sortBy(arr, (num) => -num);
    assert.deepStrictEqual(result, [10, 8, 5, 2, 1]);
  });

  it("should sort the array based on the length of strings", () => {
    const arr = ["apple", "banana", "cherry", "date"];
    const result = sortBy(arr, (str) => str.length);
    assert.deepStrictEqual(result, ["date", "apple", "banana", "cherry"]);
  });

  
});