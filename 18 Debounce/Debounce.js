var debounce = function(fn, t) {
    // Use a timer variable to store the timeout reference
    let timer;
  
    // Return a function that wraps the original function
    return function(...args) {
      // Clear any existing timers to prevent multiple executions
      clearTimeout(timer);
  
      // Schedule the original function to be executed after the delay
      timer = setTimeout(() => {
        fn.apply(this, args); // Call the original function with passed arguments
      }, t);
    };
  };
  
  // Example usage
  const log = debounce(console.log, 100);
  log('Hello'); // cancelled
  log('Hello'); // cancelled
  log('Hello'); // Logged at t=100ms

module.exports = debounce;
  