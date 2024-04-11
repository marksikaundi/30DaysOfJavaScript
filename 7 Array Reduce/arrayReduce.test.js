const assert = require("assert");
const reduce = require("./arrayReduce");

describe("reduce", () => {
  it("should return the initial value when the array is empty", () => {
    const result = reduce([], (acc, curr) => acc + curr, 0);
    assert.strictEqual(result, 0);
  });

  it("should return the correct result when reducing an array of numbers with addition", () => {
    const nums = [1, 2, 3, 4, 5];
    const result = reduce(nums, (acc, curr) => acc + curr, 0);
    assert.strictEqual(result, 15);
  });

  it("should return the correct result when reducing an array of numbers with multiplication", () => {
    const nums = [1, 2, 3, 4, 5];
    const result = reduce(nums, (acc, curr) => acc * curr, 1);
    assert.strictEqual(result, 120);
  });

  it("should return the correct result when reducing an array of strings with concatenation", () => {
    const strings = ["Hello", " ", "World", "!"];
    const result = reduce(strings, (acc, curr) => acc + curr, "");
    assert.strictEqual(result, "Hello World!");
  });
});
