const assert = require("assert");
const argumentsLength = require("./Return Length of Arguments");

describe("argumentsLength", () => {
  it("should return the correct length when no arguments are passed", () => {
    const result = argumentsLength();
    assert.strictEqual(result, 0);
  });

  it("should return the correct length when one argument is passed", () => {
    const result = argumentsLength(1);
    assert.strictEqual(result, 1);
  });

  it("should return the correct length when multiple arguments are passed", () => {
    const result = argumentsLength(1, "hello", true, [1, 2, 3]);
    assert.strictEqual(result, 4);
  });

  it("should return the correct length when null and undefined arguments are passed", () => {
    const result = argumentsLength(null, undefined);
    assert.strictEqual(result, 2);
  });
});
