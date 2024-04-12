const assert = require("assert");
const sleep = require("./Sleep");

describe("sleep", () => {
  it("should return a Promise", () => {
    const result = sleep(100);
    assert.strictEqual(result instanceof Promise, true);
  });

  it("should resolve after the specified time", async () => {
    const t = Date.now();
    await sleep(100);
    const elapsedTime = Date.now() - t;
    assert.strictEqual(elapsedTime >= 100, true);
  });
});
