const assert = require("assert");
const once = require("./One Function Call");

describe("once", () => {
  it("should call the function only once and return the result", () => {
    let count = 0;
    const increment = once(() => {
      count++;
    });

    increment();
    increment();
    increment();

    assert.strictEqual(count, 1);
  });

  it("should return undefined after the first call", () => {
    const greet = once(() => {
      return "Hello!";
    });

    const result1 = greet();
    const result2 = greet();
    const result3 = greet();

    assert.strictEqual(result1, "Hello!");
    assert.strictEqual(result2, undefined);
    assert.strictEqual(result3, undefined);
  });

  it("should work with arguments passed to the function", () => {
    const add = once((a, b) => {
      return a + b;
    });

    const result1 = add(2, 3);
    const result2 = add(4, 5);
    const result3 = add(6, 7);

    assert.strictEqual(result1, 5);
    assert.strictEqual(result2, undefined);
    assert.strictEqual(result3, undefined);
  });
});
