const assert = require("assert");
require("./Group By");

describe("Array.prototype.groupBy", () => {
  it("should group elements of the array based on the provided function", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = arr.groupBy((num) => (num % 2 === 0 ? "even" : "odd"));
    assert.deepStrictEqual(result, { odd: [1, 3, 5], even: [2, 4] });
  });

  it("should group objects based on the provided function", () => {
    const people = [
      { name: "Alice", age: 25 },
      { name: "Bob", age: 30 },
      { name: "Charlie", age: 25 },
    ];
    const result = people.groupBy((person) => person.age);
    assert.deepStrictEqual(result, {
      25: [
        { name: "Alice", age: 25 },
        { name: "Charlie", age: 25 },
      ],
      30: [{ name: "Bob", age: 30 }],
    });
  });

  it("should return an empty object if the array is empty", () => {
    const arr = [];
    const result = arr.groupBy((num) => (num % 2 === 0 ? "even" : "odd"));
    assert.deepStrictEqual(result, {});
  });
});
