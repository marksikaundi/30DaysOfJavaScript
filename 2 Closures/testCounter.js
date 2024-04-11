const assert = require("assert");
const { createCounter, testCounter } = require('./Counter');

describe("testCounter", () => {
  it("should return an array of values based on the 'calls' array", () => {
    const n1 = 10;
    const calls1 = ["call", "call", "call"];
    assert.deepStrictEqual(testCounter(n1, calls1), [10, 11, 12]);

    const n2 = -2;
    const calls2 = ["call", "call", "call", "call", "call"];
    assert.deepStrictEqual(testCounter(n2, calls2), [-2, -1, 0, 1, 2]);
  });
});

describe("createCounter", () => {
  it("should increment the counter and return the previous value", () => {
    const counter = createCounter(10);
    assert.strictEqual(counter(), 10);
    assert.strictEqual(counter(), 11);
  });
});