const assert = require("assert");
const isEmpty = require("./Empty Object");

describe("isEmpty", () => {
  it("should return true for null", () => {
    const result = isEmpty(null);
    assert.strictEqual(result, true);
  });

  it("should return true for an empty array", () => {
    const result = isEmpty([]);
    assert.strictEqual(result, true);
  });

  it("should return true for an empty object", () => {
    const result = isEmpty({});
    assert.strictEqual(result, true);
  });

  it("should return false for a non-empty array", () => {
    const result = isEmpty([1, 2, 3]);
    assert.strictEqual(result, false);
  });

  it("should return false for a non-empty object", () => {
    const result = isEmpty({ name: "John", age: 30 });
    assert.strictEqual(result, false);
  });
});
