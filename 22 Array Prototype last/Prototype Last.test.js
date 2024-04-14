const assert = require("assert");
require("./Prototype Last");

describe("Array.prototype.last", () => {
  it("should return the last element of the array", () => {
    const arr = [1, 2, 3];
    const result = arr.last();
    assert.strictEqual(result, 3);
  });

  it("should return -1 if the array is empty", () => {
    const arr = [];
    const result = arr.last();
    assert.strictEqual(result, -1);
  });
});
