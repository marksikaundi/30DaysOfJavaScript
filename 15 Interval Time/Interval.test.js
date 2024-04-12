const assert = require("assert");
const cancellable = require("./Interval");

describe("cancellable", () => {
  it("should call the provided function repeatedly with the given arguments", () => {
    let counter = 0;
    const increment = () => {
      counter++;
    };

    const cancelFn = cancellable(increment, [], 100);
    setTimeout(() => {
      cancelFn(); // Cancel the repeating calls after 500 milliseconds
      assert.strictEqual(counter, 5); // The function should have been called 5 times
    }, 500);
  });

  it("should cancel the repeating calls when the cancel function is called", () => {
    let counter = 0;
    const increment = () => {
      counter++;
    };

    const cancelFn = cancellable(increment, [], 100);
    setTimeout(() => {
      cancelFn(); // Cancel the repeating calls after 200 milliseconds
      setTimeout(() => {
        assert.strictEqual(counter, 2); // The function should have been called 2 times before cancellation
      }, 300);
    }, 200);
  });
});
