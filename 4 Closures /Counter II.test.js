const assert = require("assert");
const createCounter = require("./Counter II");

describe("createCounter", () => {
  it("should return an object with increment, decrement, and reset methods", () => {
    const counter = createCounter(0);
    assert.strictEqual(typeof counter.increment, "function");
    assert.strictEqual(typeof counter.decrement, "function");
    assert.strictEqual(typeof counter.reset, "function");
  });

  it("should increment the counter value correctly", () => {
    const counter = createCounter(0);
    assert.strictEqual(counter.increment(), 1);
    assert.strictEqual(counter.increment(), 2);
    assert.strictEqual(counter.increment(), 3);
  });

  it("should decrement the counter value correctly", () => {
    const counter = createCounter(5);
    assert.strictEqual(counter.decrement(), 4);
    assert.strictEqual(counter.decrement(), 3);
    assert.strictEqual(counter.decrement(), 2);
  });

  it("should reset the counter value correctly", () => {
    const counter = createCounter(10);
    assert.strictEqual(counter.reset(), 10);
    assert.strictEqual(counter.increment(), 11);
    assert.strictEqual(counter.reset(), 10);
  });
});
