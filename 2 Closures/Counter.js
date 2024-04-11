function createCounter(n) {
    return function() {
        let result = n;
        n++;
        return result;
    }
}

function testCounter(n, calls) {
    const counter = createCounter(n);
    const output = [];
    for (let i = 0; i < calls.length; i++) {
        if (calls[i] === "call") {
            output.push(counter());
        }
    }
    return output;
}

// Example usage:
const n1 = 10;
const calls1 = ["call", "call", "call"];
console.log(testCounter(n1, calls1)); // Output: [10, 11, 12]

const n2 = -2;
const calls2 = ["call", "call", "call", "call", "call"];
console.log(testCounter(n2, calls2)); // Output: [-2, -1, 0, 1, 2]

module.exports = { createCounter, testCounter };