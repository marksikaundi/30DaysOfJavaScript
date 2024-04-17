const assert = require("assert");
const ArrayWrapper = require("./Arry Wrapper");

describe("ArrayWrapper", () => {
  it("should correctly calculate the sum of the array elements", () => {
    const arr = [1, 2, 3, 4, 5];
    const obj = new ArrayWrapper(arr);
    const result = +obj; // using unary plus operator to convert to number
    assert.strictEqual(result, 15);
  });

  it("should return the string representation of the array", () => {
    const arr = [1, 2, 3];
    const obj = new ArrayWrapper(arr);
    const result = String(obj);
    assert.strictEqual(result, "[1,2,3]");
  });
});
