var cancellable = function(fn, args, t) {
    // Variable to store the timeout identifier
    let timeoutId;
  
    // Function to perform the repeated calls
    const repeatCall = () => {
      fn(...args); // Call the function with arguments
      timeoutId = setTimeout(repeatCall, t); // Schedule next call after t milliseconds
    };
  
    // Start the repeating calls with initial execution
    repeatCall();
  
    // Function to cancel the repeating calls
    const cancelFn = () => {
      clearTimeout(timeoutId); // Clear the pending timeout
    };
  
    // Return the cancel function
    return cancelFn;
  };

  module.exports = cancellable;
  