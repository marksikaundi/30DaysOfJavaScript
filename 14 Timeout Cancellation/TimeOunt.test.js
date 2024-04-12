const assert = require("assert");
const cancellable = require("./TimeOunt");

describe("cancellable", () => {
  it("should return a cancel function", () => {
    const cancelFn = cancellable(() => {}, [], 1000);
    assert.strictEqual(typeof cancelFn, "function");
  });

  it("should cancel the timeout when the cancel function is called", (done) => {
    let fnCalled = false;
    const cancelFn = cancellable(
      () => {
        fnCalled = true;
      },
      [],
      1000
    );

    cancelFn();

    setTimeout(() => {
      assert.strictEqual(fnCalled, false);
      done();
    }, 1500);
  });

  it("should execute the function after the specified timeout", (done) => {
    let fnCalled = false;
    const cancelFn = cancellable(
      () => {
        fnCalled = true;
      },
      [],
      1000
    );

    setTimeout(() => {
      assert.strictEqual(fnCalled, true);
      done();
    }, 1500);
  });
});
