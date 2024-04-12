const assert = require("assert");
const timeLimit = require("./Time Limit");

describe("timeLimit", () => {
  it("should return a function", () => {
    const result = timeLimit(() => {}, 1000);
    assert.strictEqual(typeof result, "function");
  });

  it("should resolve with the result of the provided function within the time limit", async () => {
    const fn = () =>
      new Promise((resolve) => setTimeout(() => resolve("Success"), 500));
    const limitedFn = timeLimit(fn, 1000);
    const result = await limitedFn();
    assert.strictEqual(result, "Success");
  });

  it("should reject with 'Time Limit Exceeded' if the provided function takes longer than the time limit", async () => {
    const fn = () =>
      new Promise((resolve) => setTimeout(() => resolve("Success"), 1500));
    const limitedFn = timeLimit(fn, 1000);
    try {
      await limitedFn();
      assert.fail("Expected promise to reject");
    } catch (error) {
      assert.strictEqual(error, "Time Limit Exceeded");
    }
  });
});
