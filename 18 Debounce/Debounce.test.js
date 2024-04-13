const assert = require("assert");
const debounce = require("./Debounce");

describe("debounce", () => {
  it("should debounce the function execution", (done) => {
    let count = 0;
    const increment = debounce(() => {
      count++;
    }, 100);

    increment();
    increment();
    increment();

    setTimeout(() => {
      assert.strictEqual(count, 1);
      done();
    }, 200);
  });

  it("should pass arguments to the debounced function", (done) => {
    let result;
    const sum = debounce((a, b) => {
      result = a + b;
    }, 100);

    sum(2, 3);

    setTimeout(() => {
      assert.strictEqual(result, 5);
      done();
    }, 200);
  });
});
