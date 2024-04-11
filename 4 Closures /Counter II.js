var createCounter = function(init) {
    let currentValue = init;

    return {
        increment: function() {
            currentValue++;
            return currentValue;
        },
        decrement: function() {
            currentValue--;
            return currentValue;
        },
        reset: function() {
            currentValue = init;
            return currentValue;
        }
    };
};

// Example usage:
const counter = createCounter(5);
console.log(counter.increment()); // Output: 6
console.log(counter.reset());     // Output: 5
console.log(counter.decrement()); // Output: 4

module.exports = createCounter;