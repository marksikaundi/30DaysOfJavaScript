var promiseAll = function (functions) {
  if (functions.length === 0) {
    return Promise.resolve([]);
  }

  return new Promise((resolve, reject) => {
    // Counter to keep track of completed promises
    let completed = 0;
    // Array to store resolved values
    const results = [];
    // Iterate through each function
    functions.forEach((func, index) => {
      // Call the function
      func().then(
        // Resolve handler
        (result) => {
          // Store the result at the correct index
          results[index] = result;
          // Increment the completed counter
          completed++;
          // If all promises have resolved, resolve the main promise
          if (completed === functions.length) {
            resolve(results);
          }
        },
        // Reject handler
        (error) => {
          // If any promise is rejected, reject the main promise
          reject(error);
        }
      );
    });
  });
};

module.exports = promiseAll;
