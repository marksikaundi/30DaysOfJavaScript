/**
 * @param {Function} fn - The asynchronous function to be limited.
 * @param {number} t - The time limit in milliseconds.
 * @return {Function} - A new function that resolves with the result of fn 
 *                       within the time limit, or rejects with "Time Limit Exceeded".
 */
var timeLimit = function(fn, t) {
    return async function(...args) {
      // Create a Promise that resolves with the result of fn
      const functionPromise = new Promise((resolve, reject) => {
        fn(...args)
          .then(resolve)
          .catch(reject);
      });
  
      // Create a Promise that rejects after the time limit
      const timeoutPromise = new Promise((_, reject) => setTimeout(reject.bind(null, "Time Limit Exceeded"), t));
  
      // Use Promise.race to wait for the first settled promise
      return Promise.race([functionPromise, timeoutPromise]);
    };
  };
  module.exports = timeLimit;