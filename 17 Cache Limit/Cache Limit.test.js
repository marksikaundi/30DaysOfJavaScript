const assert = require("assert");
const TimeLimitedCache = require("./Cache Limit");

describe("TimeLimitedCache", () => {
  it("should set a key-value pair and return false if the key is new", () => {
    const cache = new TimeLimitedCache();
    const result = cache.set(1, 42, 1000);
    assert.strictEqual(result, false);
  });

  it("should set a key-value pair and return true if the key already exists and is unexpired", () => {
    const cache = new TimeLimitedCache();
    cache.set(1, 42, 1000);
    const result = cache.set(1, 24, 2000);
    assert.strictEqual(result, true);
  });

  it("should return the value associated with a key if it exists and is unexpired", () => {
    const cache = new TimeLimitedCache();
    cache.set(1, 42, 1000);
    const result = cache.get(1);
    assert.strictEqual(result, 42);
  });

  it("should return -1 if the key does not exist or is expired", () => {
    const cache = new TimeLimitedCache();
    const result = cache.get(1);
    assert.strictEqual(result, -1);
  });

  it("should return the count of non-expired keys", () => {
    const cache = new TimeLimitedCache();
    cache.set(1, 42, 1000);
    cache.set(2, 24, 2000);
    const result = cache.count();
    assert.strictEqual(result, 2);
  });
});
