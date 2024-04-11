const assert = require("assert");
const expect = require("./To Be Or Not To Be");

describe("expect", () => {
  it("should return an object", () => {
    const result = expect(5);
    assert.strictEqual(typeof result, "object");
  });

  it("should throw an error when values are not equal", () => {
    assert.throws(() => {
      expect(5).toBe(10);
    }, Error);
  });

  it("should not throw an error when values are equal", () => {
    assert.doesNotThrow(() => {
      expect(5).toBe(5);
    }, Error);
  });

  it("should throw an error when values are equal", () => {
    assert.throws(() => {
      expect(5).notToBe(5);
    }, Error);
  });

  it("should not throw an error when values are not equal", () => {
    assert.doesNotThrow(() => {
      expect(5).notToBe(10);
    }, Error);
  });
});
