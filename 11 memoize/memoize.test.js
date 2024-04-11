const assert = require("assert");
const memoize = require("./memoize");

describe("memoize", () => {
  it("should return a function", () => {
    const result = memoize(() => {});
    assert.strictEqual(typeof result, "function");
  });

  it("should compute and cache the result for the same arguments", () => {
    const fn = memoize((a, b) => a + b);
    const result1 = fn(1, 2);
    const result2 = fn(1, 2);
    assert.strictEqual(result1, result2);
  });

  it("should compute and cache the result for recursive functions", () => {
    const fib = memoize(function fib(n) {
      return n <= 1 ? 1 : fib(n - 1) + fib(n - 2);
    });
    const result1 = fib(5);
    const result2 = fib(5);
    assert.strictEqual(result1, result2);
  });

  it("should compute and cache the result for factorial function", () => {
    const factorial = memoize(function factorial(n) {
      return n <= 1 ? 1 : factorial(n - 1) * n;
    });
    const result1 = factorial(4);
    const result2 = factorial(4);
    assert.strictEqual(result1, result2);
  });
});
