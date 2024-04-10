/**
 * @param {any} val
 * @return {Object}
 */
var expect = function(val) {
    return {
        toBe: function(otherVal) {
            if (val !== otherVal) {
                throw new Error("Not Equal");
            }
            return true;
        },
        notToBe: function(otherVal) {
            if (val === otherVal) {
                throw new Error("Equal");
            }
            return true;
        }
    };
};

// Example usage:
try {
    expect(5).toBe(5); // true
    console.log("Test Passed!");
} catch (error) {
    console.error(error.message);
}

try {
    expect(5).notToBe(5); // throws "Equal"
    console.log("Test Passed!");
} catch (error) {
    console.error(error.message);
}

module.exports = expect;