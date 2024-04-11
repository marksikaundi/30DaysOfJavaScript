function memoize(fn) {
    const cache = {};
    
    return function(...args) {
        const key = JSON.stringify(args); // Create a unique key for the arguments
        if (!(key in cache)) {
            cache[key] = fn(...args); // Compute and cache the result if not already cached
        }
        return cache[key]; // Return the cached result
    }
}

const sum = memoize((a, b) => a + b);

const fib = memoize(function fib(n) {
    return n <= 1 ? 1 : fib(n - 1) + fib(n - 2);
});

const factorial = memoize(function factorial(n) {
    return n <= 1 ? 1 : factorial(n - 1) * n;
});

// Example usage
console.log(sum(1, 2)); // Output: 3 (computed)
console.log(sum(1, 2)); // Output: 3 (cached)

console.log(fib(5)); // Output: 8 (computed)
console.log(fib(5)); // Output: 8 (cached)

console.log(factorial(4)); // Output: 24 (computed)
console.log(factorial(4)); // Output: 24 (cached)

module.exports = memoize;