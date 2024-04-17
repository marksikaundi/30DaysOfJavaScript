const assert = require("assert");
const Calculator = require("./Method Chaining");

describe("Calculator", () => {
  it("should add two numbers correctly", () => {
    const calc = new Calculator(5);
    const result = calc.add(3).getResult();
    assert.strictEqual(result, 8);
  });

  it("should subtract two numbers correctly", () => {
    const calc = new Calculator(10);
    const result = calc.subtract(4).getResult();
    assert.strictEqual(result, 6);
  });

  it("should multiply two numbers correctly", () => {
    const calc = new Calculator(2);
    const result = calc.multiply(5).getResult();
    assert.strictEqual(result, 10);
  });

  it("should divide two numbers correctly", () => {
    const calc = new Calculator(20);
    const result = calc.divide(4).getResult();
    assert.strictEqual(result, 5);
  });

  it("should throw an error when dividing by zero", () => {
    const calc = new Calculator(10);
    assert.throws(() => calc.divide(0), Error);
  });

  it("should calculate the power of a number correctly", () => {
    const calc = new Calculator(2);
    const result = calc.power(3).getResult();
    assert.strictEqual(result, 8);
  });
});
