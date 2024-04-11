const assert = require("assert");
const createHelloWorld = require("./Create Hello world Function");

describe("createHelloWorld", () => {
  it("should return a function", () => {
    const result = createHelloWorld();
    assert.strictEqual(typeof result, "function");
  });

  it('should return "Hello World" when the returned function is called', () => {
    const f = createHelloWorld();
    const result = f();
    assert.strictEqual(result, "Hello World");
  });
});
