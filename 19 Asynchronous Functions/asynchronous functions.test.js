const assert = require("assert");
const promiseAll = require("./asynchronous functions");

describe("promiseAll", () => {
  it("should resolve with an array of resolved values", () => {
    const functions = [
      () => Promise.resolve(1),
      () => Promise.resolve(2),
      () => Promise.resolve(3),
    ];

    return promiseAll(functions).then((results) => {
      assert.deepStrictEqual(results, [1, 2, 3]);
    });
  });

  it("should reject if any promise is rejected", () => {
    const functions = [
      () => Promise.resolve(1),
      () => Promise.reject(new Error("Promise rejected")),
      () => Promise.resolve(3),
    ];

    return promiseAll(functions).catch((error) => {
      assert.strictEqual(error.message, "Promise rejected");
    });
  });

  it("should resolve with an empty array if no functions are provided", function(done) {
    this.timeout(2000); // Increase timeout to 4 seconds
    const functions = [];
  
    promiseAll(functions).then((results) => {
      assert.deepStrictEqual(results, []);
      done();
    }).catch(done);
  });
});
