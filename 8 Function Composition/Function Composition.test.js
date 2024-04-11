const assert = require("assert");
const compose = require("./Function Composition");

describe("compose", () => {
  it("should return a function", () => {
    const result = compose([]);
    assert.strictEqual(typeof result, "function");
  });

  it("should return the input function when no functions are provided", () => {
    const inputFn = (x) => x;
    const result = compose([])(inputFn);
    assert.strictEqual(result, inputFn);
  });

  it("should compose functions from right to left", () => {
    const addOne = (x) => x + 1;
    const double = (x) => x * 2;
    const square = (x) => x * x;

    const composedFn = compose([addOne, double, square]);
    const result = composedFn(2);

    assert.strictEqual(result, 9);
  });
});
