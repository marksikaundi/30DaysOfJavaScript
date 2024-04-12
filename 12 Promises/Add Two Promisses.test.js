const assert = require('assert');
const addTwoPromises = require('./Add Two Promisses');

describe('addTwoPromises', () => {
  it('should return the sum of two resolved promises', async () => {
    const result = await addTwoPromises(Promise.resolve(2), Promise.resolve(2));
    assert.strictEqual(result, 4);
  });

  it('should return the sum of two resolved promises with different values', async () => {
    const result = await addTwoPromises(Promise.resolve(3), Promise.resolve(5));
    assert.strictEqual(result, 8);
  });

  it('should return the sum of two resolved promises with negative values', async () => {
    const result = await addTwoPromises(Promise.resolve(-2), Promise.resolve(-3));
    assert.strictEqual(result, -5);
  });
});